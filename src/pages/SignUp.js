import React from 'react';
import '../css/signUp/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Header from '../components/layouts/main/Header';
import SignUpComponent from "../components/SignUp/SignUpComponent";
import HeaderText from "../components/Home/HeaderText";
import Footer from '../components/layouts/main/Footer';


function SignUp  ()  {
     return (
        <div className={"sign-up-container"}>
            <div id="header" className={"header-sign-up"}>
                <Header/>
                <HeaderText/>
            </div>
            <div className={"sign-up-content"}>
                <div className="sign-up-title">
                    - Sign Up -
                </div>
                <SignUpComponent />
            </div>
            <Footer />
        </div>
    );

}

export default SignUp;