import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HttpRequestComponent } from '../src/components/httpRequestComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          To get started, edit <code>src/App.js</code> and save to reload.
          <HttpRequestComponent />
      </div>
    );
  }
}

export default App;
