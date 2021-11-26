import React, { useEffect, useState } from 'react';
import TourItem from '../TourItem/TourItem';

/* --------------------------------------------
 -----Showing allTours component------------
 ---------------------------------------------*/
const AllTours = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes------
 -------------------------------------------------*/
    const [displayAllTours, setDisplayAllTours] = useState([]);
    const [control, setConrol] = useState(true);

    useEffect(() => {
        fetch("https://mighty-island-00819.herokuapp.com/allTours")
          .then((res) => res.json())
          .then((data) => {setDisplayAllTours(data)
            setConrol(false)
        });
      }, []);
    
/* --------------------------------------------
 -----allTours to be rendered on the UI------------
 ---------------------------------------------*/

    return (
        <>
        <div className="container">
              {control?<div className="d-flex align-items-center justify-content-center">
            <button className="btn btn-success" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
   Please wait while items are loading from database...
</button>
      <div className="spinner-border text-success"></div>
        </div>:
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayAllTours.map((tourItem,index) => <TourItem
                            key={index}
                            tourItem={tourItem}
                        >
                        </TourItem>)
                    }

            </div>}
        </div>
        </>
    );
};

export default AllTours;