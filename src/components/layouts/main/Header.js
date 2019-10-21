import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import Logo from '../../Logo';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <Logo />
                <div className="menuwrap">
                    <ul>
                        <li>
                            <NavLink exact to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="metas">
                    <div className="login l">
                        <NavLink to="/login">
                            <i className="fas fa-sign-in-alt"></i>
                            Login
                        </NavLink>
                    </div>
                    <div className="reg l">
                        <NavLink to="/registration">
                            <i className="fas fa-user"></i>
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}