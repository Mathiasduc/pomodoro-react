import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'


class Input extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(event){
    this.setState({value: event.target.value});
    if (this.props.onChange){
      this.props.onChange(event);
    }
  }
  render() {
    return(
      <input type="text" value={this.state.value} onChange={this.onChange} />
      );  
  }
}

class SetTimeForm extends Component{
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(event){
    if (this.props.onInputChange) {
      this.props.onInputChange(event);
    }
  }
  onSubmit(event){
    this.props.onSubmit(event);
  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
      <Input onChange={this.onChange}/>
      <button action={this.start}>Start</button>
      </form>
      );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 360,
      refresh: 1000,
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(event){
    event.preventDefault();
    console.log(event);
    this.setState({timer: parseInt(event.target.value, 10)}); 
  }

  render() {
    return (
      <div className="App">
      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
      </div>
      <Counter timer={this.state.timer} refresh={this.state.refresh}/>
      <SetTimeForm onSubmit={this.onSubmit}/>
      </div>
      );
  }
}

export default App;
