import React, { Component } from 'react';

// used styles
import '../../css/global.css';
import '../../css/privacy/style.css';

// used components;
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';
import Privacy from './Privacy';

export default class PrivacyPage extends Component {
    render() {
        return (
            <div className="container privacy-container">
                <Header />
                    <Privacy/>
                <Footer />
            </div>
        );
    }
}