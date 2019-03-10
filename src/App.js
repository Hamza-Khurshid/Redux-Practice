import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Store from './redux/store/store';
import AddCounter from './components/AddCouter';

class App extends Component {
  render() {
    return (
      <Provider store= { Store } className="App">
        <AddCounter />
      </Provider>
    );
  }
}

export default App;
