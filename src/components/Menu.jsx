import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <div class="ui secondary pointing menu">
        <a class="active item" style={{ color: "#3ce1d0" }}>
          Nav1
        </a>
        <a class="item">Nav2</a>
        <a class="item">Nav3</a>
      </div>
    );
  }
}

export default Menu;
