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
    if (this.props.onInputChange){
      this.props.onInputChange(event);
    }
  }
  render() {
    return(
      <input type="text" value={this.state.value} onChange={this.onChange} />
      );  
  }
}

class SetTime extends Component{
  constructor(props){
    super(props);
    this.state = {stateButton: this.props.toggleBool, textButton: "Stop" };
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.stateButton){
      this.setState({textButton: "Stop"});
    }else {
      this.setState({textButton: "Start"});
    }
  }
  render() {
    return(
      <div>
        <Input onInputChange={this.props.onInputChange}/>
        <button onClick={this.props.clickButtonHandler}>{this.state.textButton}</button>
      </div>
      );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 300,
      refresh: 1000,
      toggleBool: true,
    };
    this.togglePause = this.togglePause.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({timer: parseInt(event.target.value, 10)});
  }

  togglePause(){
    const changedToggle = this.state.toggleBool ? false : true;
    this.setState({toggleBool : changedToggle});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Counter toggleBool={this.state.toggleBool} timer={this.state.timer} refresh={this.state.refresh}/>
        <SetTime stateButton={this.state.toggleBool} clickButtonHandler={this.togglePause} onSubmit={this.onSubmit} onInputChange={this.onInputChange}/>
      </div>
    );
  }
}

export default App;