import React, { Component } from "react";
import Menu from "./components/Menu";
import Headerpic from "./components/Headerpic";
import Timeline from "./components/Timeline";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Headerpic />
        <Timeline />
      </div>
    );
  }
}

export default App;
