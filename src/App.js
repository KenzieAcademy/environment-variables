import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const { REACT_APP_DOCKER } = process.env;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
        {REACT_APP_DOCKER ? "Hey Im a Dockerized APP!" : "Not Dockerized :("}
        </p>
      </div>
    );
  }
}

export default App;
