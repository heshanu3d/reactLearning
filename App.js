import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

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
        </div>
        <p>你可以在 <code>src/App.js</code> 文件中修改。
        </p>
      </div>
    );
  }
}
 
 
export default App;
