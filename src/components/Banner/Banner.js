import React from 'react';
import banner1 from '../../images/banners1.png';
import banner2 from '../../images/banners2.png';
import banner3 from '../../images/banner5.jpg';
import './Banner.css';
/* --------------------------------------------
 -----Showing banner component------------
 ---------------------------------------------*/
const Banner = () => {

/* ----------------------------------------------------
 -----banner component to be rendered on the UI--------
 -----------------------------------------------------*/

    return (
<div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src={banner1} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Comfortable Journey</h5>
                 <p>Our world class Helicopters will give you the ultimate luxury experience and comfort you would have never imagined possible for a helicopter journey. Book today and experience for yourself.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner2} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Professional Pilots</h5>
                 <p>Our pilots are among the most qualified pilots in the world. In the past, they performed amazing tasks and even some of them were from military airforce. You can only imagine how amazing these pilots must be. </p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={banner3} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Affordable Price</h5>
                 <p>We offer the most amazing service with the most affordable price. We are comitted to our customers and their concern is our highest priority. Our pricing is well defined and a result of efficient management.</p>
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
</div>
    );
            };
            export default Banner;