import React, { Component } from 'react';

// used styles
import '../../css/home/style.css';

// used components
import Header from '../layouts/default/Header';
import Footer from '../layouts/default/Footer';

export default class UserPage extends Component {
    render() {
        return (
            <div className="container-sh">
                <Header />
                    UserPage
                <Footer />
            </div>
        );
    }
}