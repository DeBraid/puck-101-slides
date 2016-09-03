import React, { Component } from "react";
import { Heading } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.demo_link = 'http://localhost:8888/#/skaters?TOIMin=1000&Team=&Player_Name=&Pos=&season=201316&situation=5v5';
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
    window.location = this.demo_link;
  }
  render() {
    const styles = {
      padding: 20,
      background: "black",
      minWidth: 300,
      marginTop: 20,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "2em"
    };
    return (
      <div>
        <Heading size={5} textColor="black">
          The demo has been viewed {this.state.count} times
        </Heading>
        <button style={styles} type="button" onClick={this.handleClick}>View Demo</button>
      </div>
    );
  }
}
