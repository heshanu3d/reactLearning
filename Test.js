import React, { Component } from 'react';
import './App.css';

class Test extends Component {
  constructor(props) {
    super(props);
  
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval( () => this.tick(), 1000 );
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({date: new Date()});
  }

  render() {
    return (
      <div className = "App">
        <h2>Test content.Time:{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
 
 
export default Test;
