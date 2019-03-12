import React, { Component } from 'react';
import './App.css';

import Child from './components/Child'

import Parent from './components/Parent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent title="hello world"/>
      </div>
    );
  }
}

export default App;
