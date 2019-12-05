import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Image"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://i.redd.it/2675lx5cy5z31.jpg"}/>
      </div>
    );
  }
}

export default App;
