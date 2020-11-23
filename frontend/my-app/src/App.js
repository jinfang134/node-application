import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      users: [
        {
          id: 1,
          name: 'test',
          age: 12
        }
      ]
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.state.date=new Date()
    // this.setState({
    //   date: new Date()
    // });
  }

  onConfirm(name){
    alert('confirm:'+name)
  }


  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <Button variant="contained" color="primary">
      你好，世界
    </Button>
        <button onClick={this.onConfirm.bind(this,'test') }> confirm </button>
        <h2>现在是 {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }


}

export default App;