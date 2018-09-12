import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dev from './development.png';
import pro from './production.png';
const { REACT_APP_DOCKER, REACT_APP_VERSION } = process.env;

function ProDev(){
if(REACT_APP_VERSION === "production"){
  return <img src={pro} width={500} height={300} />
}
if(REACT_APP_VERSION === "development"){
  return <img src={dev} width={500} height={300} />
}
return <div>no environment defined ¯\_(ツ)_/¯</div>
}

class App extends Component {
  render() {
    console.log(process.env)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <p className="App-intro">
        {REACT_APP_DOCKER ? "Hey Im a Dockerized APP!" : "Not Dockerized :("}
        </p>
        <ProDev />
      </div>
    );
  }
}

export default App;
