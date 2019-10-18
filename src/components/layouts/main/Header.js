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
        <div id="header-content">
            <div id = "header" >
                <div id = "menubar">
                    <a className ="p">HOME</a>
                    <a className ="p">CONTACTS</a>
                    <a className ="p">SHOP</a>
                    <a className ="p" href="/signup" onClick={signUp}>SIGN UP</a>
                    <a id="button" className="p" href="/signin" onClick={signIn}>SIGN IN</a>
                </div>
                <div id = "text">
                    <h1>SECURITY HOME</h1>
                    <p id = "firstText">MAKE YOUR LIFE MORE COMFORTABLE</p>
                </div>
            </div>
            <Login/>
            <SignUp/>
        </div>
    );
}

export default Header;