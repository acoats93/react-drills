import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      list: ['thing 1', 'thing 2', 'thing 3', 'thing 4']
    }
  }
  render() {
    let displayedList = this.state.list.map((el, i) => { 
      return <h2 key={i}>{el}</h2>
    })
    return (      
      <div className="App">{displayedList}</div>
    );
  }
}

export default App;
