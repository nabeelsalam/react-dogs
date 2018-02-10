import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';


class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title
    };
  }
  render() {
    return (<h1>{this.state.title}
      <button>hello</button>
    </h1>)
  }
}
class App extends Component {
  render() {
    return (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Test title="Hello World!!!"></Test>
      </header>
      <p className="App-intro">
        To get started, edit
        <code>src/App.js</code>
        and save to reload.
      </p>
    </div>);
  }
}

export default App;
