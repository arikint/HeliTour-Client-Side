import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemoveFormat } from '@fortawesome/free-solid-svg-icons';
import useFirebase from "../../hooks/useFirebase";

const MyTours = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
  const { user } = useFirebase();
  const [tours, setTours] = useState([]);
  const [control, setControl] = useState(false);
  const [control1, setControl1] = useState(false);
  const [control2, setConrol2] = useState(true);

 /* -----------------------------------------------
 -----useEffect for fetching user bookings----------
 -------------------------------------------------*/
  useEffect(() => {
    fetch(`https://mighty-island-00819.herokuapp.com/myBookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {setTours(data)
        setConrol2(false);
    });
  });


/* --------------------------------------------------------
 -----Function for performing delete operation------------
 ---------------------------------------------------------*/
  const handleDelete = (id) => {
      setControl1(true);
    fetch(`https://mighty-island-00819.herokuapp.com/deleteBooking/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setControl(!control);
          setControl1(false);
        } else {
          setControl(false);
        }
      });
    console.log(id);
  };


  /* --------------------------------------------
 -----myTours to be rendered on the UI--------
 ---------------------------------------------*/
  return (
    <div className="container">
        
        
     <div className="container my-5">
            <div className="mb-5 text-center">
                <h1>Manage My Bookings</h1>
            </div>
            {control1&&<div className="wait">
                <h3 className="waitext">Please Wait... </h3>
                <div className="spinner-border text-primary"></div>
            </div>}
           { control2?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Please wait while items are loading from database...
             </button>
      <div className="spinner-border text-success ms-5"></div>
        </div>:<div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

            {tours?.map((bookingItem, index) => (<div className="col" key={index}>
           
          <div className="card h-100">
              <div>
                  <img className="card-img-top" src={bookingItem.img} alt="" />
              </div>
              <div className="card-body">
                  <h4>{bookingItem.destination}</h4>
                  <p><small>Helicopter: {bookingItem.Helicopter}</small></p>
                  <p><small>Passenger: {bookingItem.no_of_passengers} person</small></p>
                  <p><small>Tour Duration: {bookingItem.tour_duration} hours</small></p>
                  <h5>Status: {bookingItem.status}</h5>
              </div>
              
              <button
                onClick={() => { if (window.confirm('Are you sure you want to cancel this booking? You can always book again.')) handleDelete(bookingItem._id) }}
                className="btn bg-warning p-2 m-2"
              >
               <FontAwesomeIcon icon={faRemoveFormat} /> Cancel Booking
              </button>
          </div>
          </div>

        ))}

            </div>}
        </div>
    </div>
  );
};

export default MyTours;