import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import camera from './camera.jpg';
import shield from './shield.svg';
import lock from './lock.png';
import camera2 from './camera.png';
import bell from './bell.png';
import eye from './eye.png';
import * as serviceWorker from './serviceWorker';

class App extends Component{
	render(){
		return(
			<div id = "app">
				<div id = "header" >	
					<div id = "menubar">
						<a className = "p">HOME</a>
						<a className = "p">CONTACTS</a>
						<a className = "p">SHOP</a>
						<a className = "p" id = "button">SIGN IN</a>
					</div>
					<div id = "text">
						<h1>SECURITY HOME</h1>
						<p id = "firstText">MAKE YOUR LIFE MORE COMFORTABLE</p>
					</div>
				</div>
				<div id = "main">
					<div id =  "container1">
						<div id = "div1">
							<div className = "shield shieldsLeft" id = "shield1">
								<img id = "img1" src = {lock}></img>
							</div>
							<div className = "shield shieldsLeft" id = "shield2">
								<img id = "img2" src = {camera2}></img>
							</div>
						</div>
						<div id = "div2">
							<div className = "shield shieldsRight" id = "shield3">
								<img id = "img3" src = {bell}></img>
							</div>
							<div className = "shield shieldsRight" id = "shield4">
								<img id = "img4" src = {eye}></img>
							</div>
						</div>
					</div>
					<div id = "container2">
						<div id = "div3"></div>
						<div id = "div4"></div>
					</div>
				</div>
			</div> 
		)
	}
}
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
