import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      filterString: '',
      list: ['thing 1', 'thing 2', 'thing 3', 'thing 4']
    }
  }
  handleChange(filter){
    this.setState({filterString: filter})
  }
  render() {
    let displayedList = this.state.list
    .filter((el, i) => {
      return el.includes(this.state.filterString)
    })
    .map((el, i) => {
    return <h2 key={i}>{el}</h2>
        })

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type='text'></input>
        {displayedList}
      </div>
    );
  }
}

export default App;
