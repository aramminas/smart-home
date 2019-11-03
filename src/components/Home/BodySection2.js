import React, { Component } from 'react';
import CarouselComponent from '../carousel/CarouselComponent';

export default class BodySection1 extends Component{
    render(){
        return(
            <div id="div4">
                <div className={"carousel-content"}>
                    <div id="text">
                        <h1>- Application features -</h1>
                        <p id="firstText">Manage your home using the website</p>
                    </div>
                    <CarouselComponent/>
                </div>
            </div>
        )
    }
} 