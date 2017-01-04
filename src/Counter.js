import React from 'react';

export default class Counter extends React.Component{
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