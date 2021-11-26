import React, { useEffect, useState } from 'react';
import TopRatedItem from '../TopRatedItem/TopRatedItem';

/* --------------------------------------------
 -----Showing TopRated component------------
 ---------------------------------------------*/
const TopRated = () => {

/* ------------------------------------------------
 -----declaring variables for various purposes-----
 -------------------------------------------------*/
    const [displayTopRated, setDisplayTopRated] = useState([]);
    const [control, setConrol] = useState(true);

    useEffect(() => {
        fetch("https://mighty-island-00819.herokuapp.com/allTours")
          .then((res) => res.json())
          .then((data) => {setDisplayTopRated(data)
            setConrol(false)
        });
      }, []);
    
/* -------------------------------
 -----slicing items from tour-----
 ---------------------------------*/
    const newArray=displayTopRated.slice(1, 4)

/* --------------------------------------------
 -----top rated to be rendered on the UI------------
 ---------------------------------------------*/
    return (
        <>
        <div className="container">
        {control?<div className="text-center">
            <button className="btn btn-success" type="button" disabled>
  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
   Please wait while items are loading from database...
</button>
      <div className="spinner-border text-success"></div>
        </div>:
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        newArray.map((topRatedItem,index) => <TopRatedItem
                            key={index}
                            topRatedItem={topRatedItem}
                        >
                        </TopRatedItem>)
                    }

            </div>}
        </div>
        </>
    );
};

export default TopRated;