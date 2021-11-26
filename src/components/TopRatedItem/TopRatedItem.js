import React from 'react';
import Rating from 'react-rating';
/* --------------------------------------------
 -----Showing Toprated component------------
 ---------------------------------------------*/
const TopRatedItem = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
 const { destination,Helicopter, img, rating,price } = props.topRatedItem;

    return (
        <div className="col">
        <div className="card">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{destination}</h4>
                <p><small>Helicopter: {Helicopter}</small></p>
                <p>Price: ${price}</p>
               
                
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
                
            </div>
        </div>
        </div>
    );
};

export default TopRatedItem;