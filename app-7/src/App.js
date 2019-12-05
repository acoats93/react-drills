import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NewTask from './NewTask'
import List from './List'

class App extends Component {
  constructor(){
    super()
    this.state= {
      list: []
    }
    this.addHandler = this.addHandler.bind(this);
  }
  addHandler(tasks){
    this.setState({
      list: [...this.state.list, tasks]
    })
  }
  render() {
    return (
      <div className="App">
        <NewTask add={this.addHandler}/>
        <List tasks={this.state.list}/>
      </div>
    );
  }
}

export default App;
