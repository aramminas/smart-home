import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Moment from 'react-moment';

export default class Footer extends Component {

    render() {
        const date = new Date();
        return (
            <div id="footer" className="ifooter">
                <div className="left-panel">
                    <div className="logo">
                        <NavLink to="/"><i className="fad fa-home-lg-alt"></i>Smart Home</NavLink>
                    </div>
                    <div className="links">
                        <a href="./Home_Automation_Terms_and_Conditions_v1.pdf" download>Terms of Service</a>
                        <NavLink to="/privacy">Privacy Policy</NavLink>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="copy">
                        © <Moment format="YYYY">{date}</Moment> Aca Llc. All rights reserved.
                    </div>
                    <div className="social">
                        <a target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                        <a target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}