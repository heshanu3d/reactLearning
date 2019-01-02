import React, { Component } from 'react';
import './App.css';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOnBtn1: true,
                  isToggleOnBtn2: true,
                  name:'Hello world!'};

    // This binding is necessary to make `this` work in the callback
    this.handleClickBtn1 = this.handleClickBtn1.bind(this);
  }

  handleClickBtn1() {
    this.setState(prevState => ({
      isToggleOnBtn1: !prevState.isToggleOnBtn1
    }));
  }

  handleClickUseBtn2 = () => {
    this.setState(prevState => ({isToggleOnBtn2: !prevState.isToggleOnBtn2}));
  }

  preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
  }

  render() {
    return (
      <div className="event-button">
      <button onClick={this.handleClickBtn1}>
        {this.state.isToggleOnBtn1 ? "ON" : "OFF"}
      </button>
      <button onClick={this.handleClickUseBtn2}>
        {this.state.isToggleOnBtn2 ? "ON" : "OFF"}
      </button>
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>

      </div>
    );
  }
}

export default Toggle;


