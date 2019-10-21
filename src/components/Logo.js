import React from 'react';

import '../css/logo.css';

import logo from  '../img/logo.png';

function Logo () {
    return (
        <a href="/" className="logo">
            <img src={logo} alt={"logo"}/>
        </a>
    );
}

export default Logo;