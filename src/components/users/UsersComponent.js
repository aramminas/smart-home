import React, {Component, useEffect, useState} from 'react';
import { NavLink, Redirect, useParams, useLocation, matchPath } from "react-router-dom";
// used styles

// used components;
import '../../css/users/App.css';
import Weather from './weather.js';
import Light from './Led_one.js';
import TempRoom from './tempRoom.js';
import Music from './music.js';
import Fans from './fan.js';
import Logo from './img/logo.png';
import Firebase from "../../firebase_";
import {toast} from "react-toastify";

function UsersComponent () {

    const [homePage, setHomePage] = useState(false);
    const [closeContacts, setCloseContacts] = useState(true);
    const SignOut = (e) => {
        e.preventDefault();
        Firebase.doSignOut();
        setHomePage(true);
    };
    useEffect(() => {
        let currentUser = Firebase.getCurrentUser();
        console.log('default - currentUser',currentUser);
        if(match.path === '/admin'){
            setCloseContacts(false);
        }
    });

    // get users or admin data by id
    let { pathname } = useLocation();
    let pattern = ['/user','/admin'];
    const match = matchPath(pathname, { path: pattern }) || {};

    let { id } = useParams();
    let database = {};
    if(match.path === '/admin'){
        database = Firebase.database.ref(`admin/${id}`);
    }else if(match.path === '/user'){
        database = Firebase.database.ref(`users/${id}`);
    }

    database.on("value", function(snapshot) {
        console.log(snapshot.val());
        if(!snapshot.val()){
            toast.warn("Such user was not found in the database !");
            Firebase.doSignOut();
            setTimeout(function () {
                setHomePage(true);
            },3000);
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
    // Redirect to home page
    if (homePage === true) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="sidenav">
                <img src={Logo} id="logo" />
                <NavLink to={`/user/${id}`} exact >Home</NavLink>
                { closeContacts ?
                    <NavLink to={"/contacts"} >Contacts</NavLink>
                    : null
                }
                <a className="p sign-out-a links" href="/" onClick={SignOut}>Sign out</a>
            </div>
            <div className="grid-container">
                <div>
                    <div className="card" id="temp_rooms">
                        <TempRoom />
                    </div>
                    <div id={"light_part"}>
                        <Light />
                        <Fans />
                    </div>
                </div>
                <div>
                    <Weather />
                    <Music />
                </div>
            </div >
        </div >
    )
}

export default UsersComponent;