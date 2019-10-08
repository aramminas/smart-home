import React, { Component, useState, useEffect } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slick from "react-slick";

import part_1 from '../../img/partners/partner_1.jpg';
import part_2 from '../../img/partners/partner_2.jpg';
import part_3 from '../../img/partners/partner_3.jpg';
import part_4 from '../../img/partners/partner_4.jpg';
import part_5 from '../../img/partners/partner_5.jpg';
import part_6 from '../../img/partners/partner_6.jpg';
import part_7 from '../../img/partners/partner_7.jpg';
import part_8 from '../../img/partners/partner_8.jpg';

class SlickSlider extends Component{

    render() {
        const images = [
            part_1, part_2, part_3, part_4, part_5, part_6 , part_7, part_8
        ];
        const part_content = images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt="slider image"/>
                </div>
            )
        );
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            swipe: true,
            slickPlay: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            slickNext: true,
            slickPrev: true
        };
        
        return (
            <div className="slick-slider">
                <Slick {...settings}>
                    {part_content}
                </Slick>
            </div>
        );
    }

}

export default SlickSlider;