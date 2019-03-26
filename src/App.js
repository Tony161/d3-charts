import React, { Component } from 'react';
import './App.css';
import GraphTest from './graphTest';
import TanTest from './tanTest';
import Circle from './circle';

class App extends Component {
  render() {
    return (
      <div style={{
        width: "400px",
        height: "400px"
      }} >
        <GraphTest />
        <TanTest />
        <Circle />
      </div>
    );
  }
}

export default App;
