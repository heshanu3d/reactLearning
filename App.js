import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = ( 
  <h1 className="greeting">Hello, world!</h1>
);
// const element = <img src={logo}></img>;

class App extends Component {
  render() {
    return (
      <div className = "App">
        <div className = "App-header">
          <img src = {logo} className = "App-logo" alt = "logo" />
            <h2>welcome to the homepage</h2>
            {element}
            <Test />
            <Test />
            <Test />
        </div>
      </div>
    );
  }
}
 
 
export default App;
