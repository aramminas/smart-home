import React, { Component, useState} from 'react';
import { NavLink, Redirect } from "react-router-dom";
import Login from '../../SignIn/Login';
import SignUp from '../../SignUp/SignUp';
import {useBus, useListener} from 'react-bus';

function  Header () {
    const bus = useBus();
    const signUp = (e) => {
        e.preventDefault();
        bus.emit('show-sign-up-modal', true);
    };
    const signIn = (e) => {
        e.preventDefault();
        bus.emit('show-login-modal', true);
    };

    return (
        <div id="header">
            <div id = "header" >
                <div id = "menubar">
                    <p id = "name" className = "p">Smart home</p>
                    <NavLink className = "menuEl p" to="/contact">home</NavLink>
                    <NavLink className = "menuEl p" to="/contact">pages</NavLink>
                    <NavLink className = "menuEl p" to="/contact">portfolio</NavLink>
                    <a className = "menuEl p" href="/signup" onClick={signUp}>SignUp</a>
                    <a className = "menuEl p" href="/signin" onClick={signIn}>SignIn</a>
                </div>
                <div id="text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                </div>
            </div>
            <Login/>
            <SignUp/>
        </div>
    );
}

export default Header;