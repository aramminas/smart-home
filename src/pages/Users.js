import React, { Component } from 'react';

// used styles
// import '../css/users/style.css';

// used components
// import Header from '../components/layouts/default/Header';
import UsersComponent from '../components/users/UsersComponent';
// import Footer from '../components/layouts/default/Footer';

export default class Users extends Component {
    render() {
        return (
            <div className="users-container">
                {/*<Header />*/}
                <UsersComponent />
                {/*<Footer />*/}
            </div>
        );
    }
}