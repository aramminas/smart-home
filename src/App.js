import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import router from './router';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                {router}
            </React.Fragment>
        );
    }
}

export default App;
