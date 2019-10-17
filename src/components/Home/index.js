import React, { Component } from 'react';

// used styles
import '../../css/home/style.css';
// used components
import Header from '../layouts/main/Header';
import Footer from '../layouts/main/Footer';
import Home from './Home';

export default class HomePage extends Component {
    render() {
        return (
            <div className="container-sh">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}