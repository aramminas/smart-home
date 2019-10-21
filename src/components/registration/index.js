import React, { Component } from 'react';

// used styles
import '../../css/global.css';
import '../../css/layouts/main/style.css';

// used components;
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';

export default class RegistrationPage extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                    Registration
                <Footer />
            </div>
        );
    }
}