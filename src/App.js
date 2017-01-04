import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Counter extends Component{
  constructor(props) {
    super(props);
    this.state = {timer: props.timer, refresh: props.refresh}; 
  }
  componentDidMount() {
    this.timerInterval = setInterval(
      () => this.refreshDate(),
      this.state.refresh
      );
  }
  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  refreshDate(){
    this.setState((prevState)=>({timer: prevState.timer - 1}));
  }
  render() {
    return(
      <h1>{this.state.timer.toString()}</h1>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <Counter timer= {3600} refresh={1000}/>  
      </div>
      );
  }
}

export default App;
