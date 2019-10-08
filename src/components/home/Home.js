import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import Description from './Description';
import Partners from '../general/Partners';
import PartnerDescriptions from './PartnerDescriptions';

function Home (){

    return (
        <div className="container home-container">
            <div className="content">
                <h1>Welcome to our site</h1>
                <h2>We are glad that you visited our site.</h2>
                <h3>And we offer to get acquainted with our product.</h3>
                <div className="line-content">
                    <div className="line"> </div>
                    <div className="line"> </div>
                    <div className="line"> </div>
                </div>

                <Slider />
                <Description />
                <Partners />
                <PartnerDescriptions />

            </div>
        </div>
    );
}

export default Home;
