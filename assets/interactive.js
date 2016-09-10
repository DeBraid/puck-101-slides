import React, { Component } from "react";
import { Heading, Link } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    // const demo_link = 'http://localhost:8888/#/skaters?TOIMin=1000&Team=&Player_Name=&Pos=&season=201316&situation=5v5';
    const demo_link = 'http://milky-amount.surge.sh/';
    this.state = {
      count: 0,
      demo_link: demo_link,
      styles: {
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
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    let { count, styles, demo_link } = this.state;
    return (
      <div>
        <Heading size={5} textColor="black">
          The demo has been viewed { count } times
        </Heading>
        <button style={ styles } 
          type="button" 
          onClick={this.handleClick}>
            <Link href={ demo_link } target="_blank">
              Live Demo
            </Link>
        </button>
      </div>
    );
  }
}
