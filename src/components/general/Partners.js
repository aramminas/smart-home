import React, { useState, useEffect } from 'react';
import SlickSlider from './SlickSlider';

function Partners (){

    return (
        <div className="partners-container">
            <div className="partners-title">
                <h2><span>Our partners</span></h2>
            </div>
            <div>
                <SlickSlider />
            </div>
        </div>
    );
}

export default Partners;
