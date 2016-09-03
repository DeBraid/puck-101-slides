// Import React
import React, {Component} from "react";
import Constants from "./Constants.js";
import {
  Appear, BlockQuote, Cite, CodePane, 
  Deck, Fill, Heading, Image, Layout, 
  Link, ListItem, List, Markdown, 
  Quote, Slide, Spectacle, Text
} from "spectacle";

import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
// Import custom component
import Interactive from "../assets/interactive";
import Title from "./slides/Title.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const {images} = Constants;
preloader(images);
const theme = createTheme({ primary: "#e77423" });

export default class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Title />
          </Slide>
          
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.nhl_puck} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              about me
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.rink.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                biochemistry
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                finance
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                computer science
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>The "Right" Approach</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  stats?
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  eye test?
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.rink.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                It's a trap!
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                They are the same
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                We observe outcomes
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Absolute vs. Relative Performance
            </Heading>
            <Markdown>
              {`
Can we visualize both a single player and the whole league?
* data tables are noisey
* chart magic is confusing
* no wasted ink, no wasted time/energy
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>You can't outrun a bear!</Quote>
              <Cite>Unknown</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Box and Whisker Plots
            </Heading>
            <Markdown>
              {`
Simple way to visualize both relative and absolute performance
* identify the player
* compare to peers
              `}
            </Markdown>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="20px" margin="20px" width="100%" src={images.players.subban.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="20px" margin="20px" width="100%" src={images.players.weber.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="20px" margin="20px" width="100%" src={images.players.kopi.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="20px" margin="20px" width="100%" src={images.players.ovi.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>standardized measure of perforamnce</ListItem></Appear>
              <Appear><ListItem>absolute vs. relative</ListItem></Appear>
              <Appear><ListItem>simple and illustrative</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Web applications create powerful workflows...
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Toronto by
            </Heading>
            <Link href="http://www.github.com/debraid">
              Derek Braid
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
