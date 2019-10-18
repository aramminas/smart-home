import React, { Component, useState } from 'react';
import { NavLink, Redirect, useParams } from "react-router-dom";
import Firebase  from "../../../firebase_";


function  Header () {
// Component local data
    const [homePage, setHomePage] = useState(false);

    const SignOut = (e) => {
        e.preventDefault();
        Firebase.doSignOut();
        setHomePage(true);
    };
    // get users data by id
    let { id } = useParams();
    let database = Firebase.database.ref(`users/${id}`);

    database.on("value", function(snapshot) {
        console.log(snapshot.val());
    }, function (error) {
        console.log("Error: " + error.code);
    });


    // Redirect to home page
    if (homePage === true) {
        return <Redirect to="/" />
    }

    return (
        <div id="header-default">
            <header>
                <a className="p sign-out-a" href="/signout" onClick={SignOut}>SIGN OUT</a>
                header-default
            </header>
        </div>
    );
}

export default Header;

