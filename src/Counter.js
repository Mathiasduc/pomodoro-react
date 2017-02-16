import React from 'react';

export default class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timer: props.timer,
      refresh: props.refresh,
      toggleBool: props.toggleBool,
    };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.toggleBool !== this.props.toggleBool){
      this.props.toggleBool? clearInterval(this.timerInterval): this.startInterval();
      this.state.toggleBool = this.props.toggleBool;
    }
    if(nextProps.timer !== this.props.timer){
      clearInterval(this.timerInterval);
      this.state.timer = nextProps.timer;
    }  
  }
  
  componentDidMount() {
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }
  startInterval(){
    this.timerInterval = setInterval(
      () => this.refreshState(),
      this.state.refresh
      );
  }
  refreshState(){
    this.setState((prevState)=>({timer: prevState.timer - 1}));
  }
  render() {
    return(
      <h1>{parseInt(this.state.timer/60, 10)} : {parseInt(this.state.timer%60, 10)}</h1>
      );
  }
}