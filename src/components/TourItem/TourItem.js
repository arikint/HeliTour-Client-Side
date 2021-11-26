import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import './TourItem.css';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
/* --------------------------------------------
 -----Showing touritem component------------
 ---------------------------------------------*/
const TourItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { destination,Helicopter, img, no_of_passengers, price, rating } = props.tourItem;
    return (
        <div className="col">
        <div className="card h-100">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{destination}</h4>
                <p><small>Helicopter: {Helicopter}</small></p>
                <p><small>Number of Passengers: {no_of_passengers}</small></p>
                <p><small>Tour Price: ${price}</small></p>
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
              <div className="btnPosition">
                <NavLink className="btn btn-primary"
                           to={ `/touritem/${props.tourItem?._id}`  }
                           
                        > 
                           <FontAwesomeIcon icon={faCalendarCheck} />  Book Now
                      </NavLink>
              </div>
                
            </div>
        </div>
        </div>
    );
};

export default TourItem;