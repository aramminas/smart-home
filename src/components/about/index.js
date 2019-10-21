import React, { Component } from 'react';

// used styles
import '../../css/global.css';
import '../../css/about/style.css';

// used components
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';
import About from './About';

export default class AboutPage extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <About />
                <Footer />
            </div>
        );
    }
}