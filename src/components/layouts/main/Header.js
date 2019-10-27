import React from 'react';
import { NavLink } from "react-router-dom";
import Login from '../../SignIn/Login';
import logo from "../../Home/Design_MainPage/logo.png";

import { stack as Menu } from 'react-burger-menu';

import '../../../css/layouts/style.css';

function  Header () {

    return (
        <div id="header-content">
            <>
                <div id="menubar">
                    <div className={"links-content"}>
                        <div className = "logo">
                            <img id="logo" src={logo} alt={"logo"}/>
                        </div>
                        <div className={"links-part"}>
                            <NavLink to={"/"} className="links">HOME</NavLink>
                            <NavLink to={"/"} className="links">CONTACTS</NavLink>
                            <NavLink to={"/"} className="links">SHOP</NavLink>
                            <NavLink to={"/signup"} className="links">SIGN UP</NavLink>
                            <Menu right width={"500px"} noOverlay>
                                <Login/>
                            </Menu>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Header;