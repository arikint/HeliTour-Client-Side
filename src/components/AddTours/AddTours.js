import React from "react";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useFirebase from "../../hooks/useFirebase";

const AddTours = () => {
    /* ------------------------------------------------
 -----Declaring variables for various purpose------------
 -----------------------------------------------------*/
  const { user } = useFirebase();
    const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

/* --------------------------------------------
 -----function for submitting tour info------------
 ---------------------------------------------*/

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch("https://mighty-island-00819.herokuapp.com/addTour", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
    history.push("/touradded");
  };

/* ------------------------------------------------
 -----returning UI components to be visible------------
 -------------------------------------------------*/

  return (
    <div>
      <h1 className="mt-5 text-center">Add Tours</h1>
      <div className="login-box w-50 m-auto mt-5">
        <div className="event-box border d-flex justify-content-center align-items-center p-5">
          <div className="login-form text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("destination")}
                placeholder="Destination"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("Helicopter")}
                placeholder="Helicopter"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
                {...register("price")}
                placeholder="Price"
                className="p-2 m-2 w-100"
              />
              <br />

              <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              <select {...register("no_of_passengers")} className="p-2 m-2 w-100">
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4 person</option>
                <option value="5">5 person</option>
              </select>
              <br />
              <select {...register("tour_duration")} className="p-2 m-2 w-100">
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="3">3 hours</option>
                <option value="4">4 hours</option>
              </select>
              
              <br />
              <select {...register("rating")} className="p-2 m-2 w-100">
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add Tour" className="btn btn-info w-75 m-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTours;
