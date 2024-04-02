import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//import ExampleCarouselImage from 'components/ExampleCarouselImage';

import slide_image_1 from "../images/slider/img_1.jpg";
import slide_image_2 from "../images/slider/img_2.jpg";
import slide_image_3 from "../images/slider/img_3.jpg";
import slide_image_4 from "../images/slider/img_4.jpg";
import slide_image_5 from "../images/slider/img_5.jpg";
import slide_image_6 from "../images/slider/img_6.jpg";
import slide_image_7 from "../images/slider/img_7.jpg";

function Home() {
    const show = () => {

    }
    return (
        <div className='leftRight'>
            <div className='heading'>

                <h1>PLAN YOUR</h1>
                <h3>NEXT BEST TRAVEL EXPERIENCE HERE</h3>
                <div className="formCont">

                <div class="card">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={slide_image_1} class="d-block w-100" alt="..."/>
                            </div>

                            <div class="carousel-item">
                                <img src={slide_image_1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={slide_image_1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={slide_image_1} class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src={slide_image_1} class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>


            <div className="rightContent">
                
                   <form  className="homeForm" action="">
                   
                      <label htmlFor="">Journey from</label><input type="text" className="inputEle" />
                        <label htmlFor="">To</label> < input type="text" className="inputEle" />
                 
                   
                       <label htmlFor="">Desired departure date</label> <input type="date" className="inputEle" />
                      <label htmlFor=""> Duration of trip (in days)</label><input type="number" className="inputEle" />
                   <button type='submit'> Get details</button>
            </form>
            </div>
        </div>
    )
}

export default Home