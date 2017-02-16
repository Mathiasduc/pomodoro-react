import React from 'react';

export default class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      timer: 300,
      refresh: 1000,
      toggleBool: false,
    };
  }
  componentWillReceiveProps(nextProps){
  console.log(nextProps);
    if(nextProps.toggleBool !== this.state.toggleBool){
      console.log('different');
      nextProps.toggleBool? this.startInterval(): clearInterval(this.timerInterval);
      this.setState({toggleBool:nextProps.toggleBool});
    }
    if(nextProps.timer !== this.props.timer){
      clearInterval(this.timerInterval);
      this.setState({timer: nextProps.timer});
    }  
  }
  
  componentDidMount() {
    this.setState({timer: this.props.timer, refresh: this.props.refresh, toggleBool: this.props.toggleBool});
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