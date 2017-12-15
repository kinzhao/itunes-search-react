import React, { Component } from 'react';
import './styles/App.css';
import { Albums } from './albums/albums';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Albums/>
      </div>
    );
  }
}

export default App;
