import React, { Component } from 'react';

// used styles
import '../../css/global.css';
import '../../css/contact/style.css';

// used components
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';

export default class ContactPage extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                Contact
                <Footer />
            </div>
        );
    }
}