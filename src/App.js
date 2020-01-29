import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, im a react app</h1>
        <Person name='Nasser' age='38'/>
        <Person name="naif" age = '1'>Hobbies are gaming</Person>
        <Person/>
      </div>
    );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'Header'));
  }
}

export default App;
