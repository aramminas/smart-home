import React, { Component } from 'react';

// used styles
import '../../css/global.css';
import '../../css/layouts/main/style.css';
import '../../css/home/style.css';
import '../../css/carousel.min.css';
import '../../css/carousel.css';

// used components
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';
import Home from './Home';

export default class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}