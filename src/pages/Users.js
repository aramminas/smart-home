import React, { Component } from 'react';

// used styles
// import '../css/users/style.css';

// used components
import UsersComponent from '../components/users/UsersComponent';
import RightMenu from "../components/users/RightMenu";

export default class Users extends Component {
    render() {
        return (
            <div className="users-container">
                <div>
                    <RightMenu />
                    <UsersComponent />
                </div>
            </div>
        );
    }
}