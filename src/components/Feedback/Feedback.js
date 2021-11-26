import feedback1 from '../../images/travels2.png';
import feedback2 from '../../images/travels4.png';
import feedback3 from '../../images/travels5.png';

/* --------------------------------------------
 -----Showing feedback component------------
 ---------------------------------------------*/
const Feedback = (props) => {
    /* --------------------------------------------
 -----feedback to be rendered on the UI------------
 ---------------------------------------------*/
 

    return (
        <>
        <div className="container">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src={feedback1} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Jerry Wiliams</h5>
                 <p>I really needed a relaxing tour and time was short. I had other options but it was the most convenient. I had a really good experience with them. I will come back again.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={feedback2} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Johnson fedrik</h5>
                 <p>I suddenly got a vacation and I wanted to utilize my time efficiently as I am an engineer. So I wasted no time and booked a trip. I am so glad I did that. Amazing experience overall.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src={feedback3} className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Christina jones</h5>
                 <p>My cousine was with me and I wanted to try out a different type of tour. And it also must be exciting. So I chose Helitour for this thrilling experience. Thank you so much Helitour for giving us this special time to enjoy.</p>
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
        </>
    );
};

export default Feedback;