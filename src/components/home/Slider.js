import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import imag_1 from '../../img/carousel/slide_1_1.jpg';
import imag_2 from '../../img/carousel/slide_1_2.jpg';
import imag_3 from '../../img/carousel/slide_1_3.jpg';
import imag_4 from '../../img/carousel/slide_1_4.jpg';
import imag_5 from '../../img/carousel/slide_1_5.jpg';
import imag_6 from '../../img/carousel/slide_1_6.jpg';
import imag_7 from '../../img/carousel/slide_1_7.jpg';
import imag_8 from '../../img/carousel/slide_1_8.jpg';
import imag_9 from '../../img/carousel/slide_1_9.jpg';
import imag_10 from '../../img/carousel/slide_1_10.jpg';
import imag_11 from '../../img/carousel/slide_1_11.jpg';
import imag_12 from '../../img/carousel/slide_1_12.jpg';

function Slider (){

    const images = [
        imag_1, imag_2, imag_3, imag_4, imag_5, imag_6, imag_7, imag_8, imag_9, imag_10, imag_11, imag_12
    ];

    const images_content = images.map((image,index) => (
        <div key={index}>
            <img src={image} alt="slider image"/>
            <p className="legend">The inscription {index+1}</p>
        </div>
        )
    );

    return (
        <div className="carousel-content">
            <Carousel>
                {images_content}
            </Carousel>
        </div>

    );
}

export default Slider;


// <div>
//     <img src={imag_1} alt="slider image"/>
//     <p className="legend">Legend 1</p>
// </div>
// <div>
// <img src={imag_2} alt="slider image"/>
//     <p className="legend">Legend 2</p>
// </div>
// <div>
//     <img src={imag_3} alt="slider image"/>
//     <p className="legend">Legend 3</p>
// </div>