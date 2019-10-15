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
						<p id = "name" className = "p">Smart home</p>
						<a className = "menuEl p">home</a>
						<a className = "menuEl p">pages</a>
						<a className = "menuEl p">portfolio</a>
					</div>
					<div id = "text">
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</div>
				</div>
				<div id = "main">
					<div id = "div1">
						<div className = "shieldsLeft" id = "shield1">
							<img id = "img1" src = {lock} height = "50px" width = "50px"></img>
						</div>
						<div className = "shieldsLeft" id = "shield2">
							<img id = "img2" src = {camera2} height = "50px" width = "50px"></img>
						</div>
					</div>
					<div id = "div2">
						<div className = "shieldsRight" id = "shield4">
							<img id = "img4" src = {eye} height = "50px" width = "50px"></img>
						</div>
						<div className = "shieldsRight" id = "shield3">
							<img id = "img3" src = {bell} height = "50px" width = "50px"></img>
						</div>
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
