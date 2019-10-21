import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './components/mainPage/Header';
import HeaderText from './components/mainPage/HeaderText';
import MainBody from './components/mainPage/MainBody';
import BodySection1 from './components/mainPage/BodySection1';
import BodySection2 from './components/mainPage/BodySection2';
import Footer from './components/mainPage/Footer';

class App extends Component{
	render(){
		return(
			<div id = "app">
				<div id = "header" >	
					<Header />
					<HeaderText />
				</div>
				<div id = "main">
					<div id =  "container1">
						<MainBody />
					</div>
					<div id = "container2">
						<BodySection1 />
						<BodySection2 />
					</div>
				</div>
				<div id = "container3">
					<Footer />
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
