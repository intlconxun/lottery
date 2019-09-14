import React, { Component } from "react";
import Balls from "./Balls";
import "./App.css";

export class Lottery extends Component {
  static defaultProps = {
    title: "Lottery",
    maxNum: 40,
    numBalls: 6
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls })
    };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState(curState => ({
      nums: curState.nums.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }));
  }

  handleClick(e) {
    this.generate();
  }

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.nums.map(n => (
            <Balls num={n} />
          ))}
        </div>
        <button className="Lottery-btn" onClick={this.handleClick}>
          Generate
        </button>
      </section>
    );
  }
}

export default Lottery;
