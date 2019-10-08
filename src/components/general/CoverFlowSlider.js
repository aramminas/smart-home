import React, { Component } from 'react';
import CoverFlow from 'react-coverflow';


import worker_1 from '../../img/workers/worker_1.jpeg';
import worker_2 from '../../img/workers/worker_2.jpg';
import worker_3 from '../../img/workers/worker_3.jpg';
import worker_4 from '../../img/workers/worker_4.png';
import worker_5 from '../../img/workers/worker_5.png';

class CoverFlowSlider extends Component {

    render() {
        const images = [
            worker_1, worker_2, worker_3, worker_4, worker_5
        ];
        const worker_content = images.map((image, index) => (
                <img key={index} src={image} alt='worker name' />
            )
        );
        const settings = {
            width: 960,
            height: 480,
            displayQuantityOfSide: 2,
            navigation: false,
            enableHeading: true,
            enableScroll: false
        };
        return (
            <div className="workers-slider">
                <CoverFlow {...settings} >
                    {worker_content}
                </CoverFlow>
            </div>
        );
    };

}

export default CoverFlowSlider;