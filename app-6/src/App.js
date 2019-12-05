import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo"

class App extends Component {
  constructor(){
    super()
    this.state ={
      list: [],
      input: ''
    }
    this.addHandler = this.addHandler.bind(this)
  }
  inputHandler(value){
    this.setState({input: value})

  }
  addHandler(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }
  render() {
    let list = this.state.list.map((el, i) => {
      return <Todo key={i} task={el}/>
    })
    return (
      <div className="App">
        <h1>ToDo List!!!</h1>
        <input placeholder= 'next task'value={this.state.input} onChange={e => this.inputHandler(e.target.value)}></input>
        <button onClick={this.addHandler}>Add to List</button>
        {list}
      </div>
    );
  }
}

export default App;
