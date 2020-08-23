import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from '../../SignIn/Login';
import logo from "../../Home/Design_MainPage/logo.png";
// import Firebase from "../../../firebase_";
import { stack as Menu } from 'react-burger-menu';
import  useWindowSize   from '../../../helpers/WindowSize';

import '../../../css/layouts/style.css';

function  Header () {
    // dynamic get screen width
    const [width] = useWindowSize();
    let login_width =  width > 500 ? 500 : width;

    useEffect(() => {
        // let user = Firebase.getCurrentUser();
        // console.log('user',user);
    },[]);

    return (
        <div id="header-content">
            <>
                <div id="menubar">
                    <div className={"links-content"}>
                        <div className = "logo">
                            <img id="logo" src={logo} alt={"logo"}/>
                        </div>
                        <div className={"links-part"}>
                            <NavLink to={"/"} exact className="links">HOME</NavLink>
                            <NavLink to={"/contacts"} className="links">CONTACTS</NavLink>
                            <NavLink to={"/signup"} className="links">SIGN UP</NavLink>
                            <Menu right width={`${login_width}px`} noOverlay>
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