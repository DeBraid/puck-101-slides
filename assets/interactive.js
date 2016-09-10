import React, { Component } from "react";
import { Heading, Link } from "spectacle";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      demo_link: 'http://milky-amount.surge.sh/',
      btn_msg: 'Live Demo',
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
      count: this.state.count + 1,
      btn_msg: 'Good Call'
    });
    setTimeout(()=>{
      window.location = this.state.demo_link;
    }, 1500)
  }
  render() {
    let { count, styles, demo_link, btn_msg } = this.state;
    return (
      <div>
        <Heading size={5} textColor="black">
          The demo has been viewed { count } times
        </Heading>
        <button style={ styles } 
          type="button" 
          onClick={this.handleClick}>
            { btn_msg }
        </button>
      </div>
    );
  }
}
