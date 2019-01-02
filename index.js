import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Test from './Test';
import Toggle from './event';
import LoginControl from './optionalRender'
import './App.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App/>,  	document.getElementById('root'));
ReactDOM.render(<Test/>, 	document.getElementById('test'));
ReactDOM.render(<Toggle/>,	document.getElementById('event'));
ReactDOM.render(<LoginControl isLoggedIn={false}/>,	document.getElementById('optionalRender'));

function tick() {
	const updateInterval = (
    <div className = "App">
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      
    </div>
  );
	ReactDOM.render(updateInterval, document.getElementById('internal'));
}

setInterval(tick, 1000);

serviceWorker.unregister();
