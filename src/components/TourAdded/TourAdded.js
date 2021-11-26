import React from 'react';
import Not from '../../images/success.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
/* --------------------------------------------
 -----Showing Tour added success component------------
 ---------------------------------------------*/
const TourAdded = () => {
    return (
        <div className="container text-center my-5 height">
             <img className="my-5" src={Not} alt="..."/>

            <h1>Tour Added Successfully</h1><br></br>
            <h3>The tour requsted for adding to the main tour service area has been added Successfully. Navigate to the homepage to use the added tour service.</h3>
            <NavLink className="btn btn-primary my-5"
                           to={ `home#home`  }
                           
                        > 
                           <FontAwesomeIcon icon={faHome} />  Homepage
                      </NavLink>
        </div>
    );
};

export default TourAdded;