import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export default class Title extends React.Component {
  render() {
    return (<div>
        <Heading size={1} fit caps lineHeight={1} textColor="black">
          Hockey Charts 101
        </Heading>
        <Heading size={1} fit caps>
          Smart Data Viz, Smarter Decisions 
        </Heading>
        <Link href="https://twitter.com/Puck_Quant">
          <Text bold margin="25px">by Derek Braid (@Puck_Quant)</Text>
        </Link>
      </div>);
  }
}
