import React, { Component } from "react";
import "./App.css";

export class Balls extends Component {
  render() {
    return <div className="Balls">{this.props.num}</div>;
  }
}

export default Balls;
