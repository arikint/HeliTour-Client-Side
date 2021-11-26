import React from 'react';
import useFirebase from "../../hooks/useFirebase";
import Not from '../../images/success.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

/* -----------------------------------------------------------
 -----Showing Booking placed successfully component------------
 -------------------------------------------------------------*/
const BookingPlaced = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
    const { user } = useFirebase();

/* --------------------------------------------------
 -----Booking placed to be rendered on the UI--------
 ---------------------------------------------------*/

    return (
        <div className="container text-center my-5 height">
             <img className="my-5" src={Not} alt="..."/>

            <h1>Booking Placed Successfully</h1><br></br>
            <h3>Dear {user.displayName},</h3>
            <h4>Thanks for Booking a tour in Helitour. We will approve your booking shortly. Navigate to My bookings for more options</h4>
            <NavLink className="btn btn-primary my-5"
                           to={ `mytours#mytours`  }
                           
                        > 
                           <FontAwesomeIcon icon={faCalendarCheck} />  My Bookings
                      </NavLink>
        </div>
    );
};

export default BookingPlaced;