import React, { Component } from 'react';

// used components
import CoverFlow from '../general/CoverFlowSlider';
import Team from './Team';

class About extends Component {
    render() {
        return (
            <div className="about">
                <div className="container about-container">
                    <div className="content">
                        <h1>Our specialists</h1>
                        <div className="line"> </div>
                        <div className="activity-description">
                            <h3>About our activity</h3>
                            <div className="activity-text">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                                content here', making it look like readable English. Many desktop publishing packages and web
                                page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
                                will uncover many web sites still in their infancy. Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).
                            </div>
                        </div>
                        <div className="line"> </div>
                        <CoverFlow />
                        <Team />
                    </div>
                </div>
            </div>
        );
    }
}

export default About;