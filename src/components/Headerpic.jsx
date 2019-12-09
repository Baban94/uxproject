import React, { Component } from "react";
import Earthlybild from "../Earthlybild.png";

class Headerpic extends Component {
  render() {
    return (
      <div className="headercontainer">
        {" "}
        <img src={Earthlybild} />
      </div>
    );
  }
}

export default Headerpic;
