import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ProcessBooking.css';
import Rating from 'react-rating';
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";
/* --------------------------------------
 -----Function for tourdetail------------
 ----------------------------------------*/

const ProcessBooking = () => {

/* --------------------------------------------
 -----variables declared for various purpose---
 ---------------------------------------------*/

    let { _id } = useParams();
    const [tourItem, setTourItem] = useState([]);
    const history = useHistory();
    const [control, setControl] = useState(true);

/* -----------------------------------------------
 -----useEffect for fetching tour item------------
 -------------------------------------------------*/
    useEffect(() => {
        fetch(`https://mighty-island-00819.herokuapp.com/touritem/${_id}`)
          .then((res) => res.json())
          .then((data) => {setTourItem(data)
        setControl(false);
        });
      }, [_id]);

      const { user } = useFirebase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/* --------------------------------------------------------
 -----Function for submitting booking information----------
 ----------------------------------------------------------*/
  const onSubmit = (data) => {
      data.destination=tourItem[0]?.destination;
      data.tour_duration=tourItem[0]?.tour_duration;
      data.img=tourItem[0]?.img;
      data.Helicopter=tourItem[0]?.Helicopter;
      data.no_of_passengers=tourItem[0]?.no_of_passengers;
      data.rating=tourItem[0]?.rating;
      data.price=tourItem[0]?.price;
      data.description=tourItem[0]?.description;
      data.status="Pending";
      data.email=user.email;
      if(data.name==="") data.name=user.displayName;
      if(data.bemail==="") data.bemail=user.email;
    fetch("https://mighty-island-00819.herokuapp.com/addBooking", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    history.push("/bookingplaced");
  };
 

console.log(tourItem);
console.log(_id);

/* ---------------------------------------------------
 -----process booking to be rendered on the UI--------
 -----------------------------------------------------*/
    return (
        <>
        <div className="container">
         { control?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait while items are loading from database...
             </button>
      <div className="spinner-border text-success ms-5"></div>
        </div>:<div className="row row-cols-lg-2 row-cols-md-1 row-cols-1 g-5 my-5 pb-5">
            <div className="col">
            <img className="detailImg" alt="" src={tourItem[0]?.img}/>  
            </div>
            <div className="col">
            <h3> {tourItem[0]?.destination}</h3>
            <h5> Helicopter : {tourItem[0]?.Helicopter}</h5>
                      <h5>Tour Duration : {tourItem[0]?.tour_duration}</h5>
                     <h5> Number of Passengers: {tourItem[0]?.no_of_passengers}</h5>
                     <Rating
                    initialRating={tourItem[0]?.rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                    <h3> Price : {tourItem[0]?.price}</h3>
                    <h3> Description :</h3>
                    <h5>{tourItem[0]?.description}</h5>
            </div>
          </div>}
      
        </div>

        <div>
      <h1 className="mt-5 text-center">
        Enter Booking Information
      </h1>
      <div className="login-box w-50 m-auto mt-5 text-center">
        <div className="event-box border d-flex justify-content-center align-items-center p-5">
          <div className="login-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input defaultValue={user.displayName}
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
              />
              <br />

              <input defaultValue={user.email}
                {...register("bemail")}
                placeholder="Email"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("date", { required: true })}
                placeholder="date"
                type="date"
                
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("address", { required: true })}
                placeholder="address"
                className="p-2 m-2 w-100"
              />
              <br />
              
              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Book Now" className="btn btn-info w-75 mt-3" />
            </form>
        
          </div>
        </div>
      </div>
    </div>
        </>
    );
};

export default ProcessBooking;

