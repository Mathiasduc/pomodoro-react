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
    if (this.props.callback){
      this.props.callback();
    }
  }

  render() {
    return(
      <input type="text" value={this.state.value} onChange={this.props.onChange} />
      );  
  }
}

class SetTimeForm extends Component{
  constructor(props) {
    super(props);
    this.setTime = this.setTime.bind(this);
  }
  setTime(event){
    console.log(event.target.value)
  }
  render() {
    return(
      <Input callback={this.setTime}/>
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
      <Counter timer={3600} refresh={1000}/>
      <SetTimeForm/>
      </div>
      );
  }
}

export default App;
