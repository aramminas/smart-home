import React, { Component } from 'react';
import icon1 from './Design_MainPage/icon1.png';
import icon2 from './Design_MainPage/icon2.png';
import icon3 from './Design_MainPage/icon3.png';
import icon4 from './Design_MainPage/icon4.png';

export default class MainBody extends Component{
    render(){
        return(
            <div>
                 <div id = "div1">
                    <div className = "shield shieldsLeft" id = "shield1">
                        <img id = "img1" src = {icon1}></img>
                    </div>
                    <div className = "shield shieldsLeft" id = "shield2">
                        <img id = "img2" src = {icon2}></img>
                    </div>
                </div>
                <div id = "div2">
                    <div className = "shield shieldsRight" id = "shield3">
                        <img id = "img3" src = {icon3}></img>
                    </div>
                    <div className = "shield shieldsRight" id = "shield4">
                        <img id = "img4" src = {icon4}></img>
                    </div>
                </div>
            </div>
        )
    }
}