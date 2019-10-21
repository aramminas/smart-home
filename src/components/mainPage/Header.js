import React, { Component } from 'react';
import logo from './Design_MainPage/LOGO.png'

export default class Header extends Component{
    render(){
        return(
            <div id = "menubar">
                <div className = "logo">
                    <img id = "logo" src = {logo}></img>
                </div>
                <a className = "p">HOME</a>
                <a className = "p">CONTACTS</a>
                <a className = "p">SHOP</a>
                <a className = "p" id = "button">SIGN IN</a>
            </div>
        )
    }
} 