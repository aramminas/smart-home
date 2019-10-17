import React,{Component} from 'react';
import './App.css';
import router from './router';

class App extends Component {
  render() {
    return (
        <div id = "app">
            <React.Fragment>
                {router}
            </React.Fragment>
        </div>
    );
  }
}

export default App;
