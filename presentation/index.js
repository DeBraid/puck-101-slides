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
            <Heading caps size={3} textColor="primary" textFont="primary">
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
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>
                Dictation being the vehicle of thoughts, if the appearance offends, a further knowledge is not sought.
              </Quote>
              <Cite>
                <Link href="http://statsportsconsulting.com/2014/11/24/1357/" target="_blank">
                  Samuel Johnson, Died 1784, "only truly great critic of English lit"
                </Link>
              </Cite>
            </BlockQuote>
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
              What are analytics anyway?
            </Heading>
            <Layout>
              <Fill>
                <List margin="10px">
                  <ListItem padding="0px 10px">From 2007-15 R^2 between CF% and points is 0.4</ListItem>
                  <ListItem padding="0px 10px">Since 2008 correlation of shot share (CF%) to winning has decreased from 0.6 to under 0.4.  </ListItem>
                  <ListItem padding="0px 10px">Competitive forces at work...</ListItem>
                </List>
                <Link href="http://www.hockeyprospectus.com/re-visiting-the-relationship-between-corsi-and-team-standings/" target="_blank">
                  via Hockey Prospectus
                </Link>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Inconsistencies in data recording from rink to rink means location and amount of shots, giveaways and takeaways are not reliable.</Quote>
              <Cite>
                <Link href="http://statsportsconsulting.com/2014/11/24/1357/" target="_blank">
                  Michael Schuckers (Stat Sports Consulting)
                </Link>
              </Cite>
            </BlockQuote>
          </Slide>
          
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Great time to be alive: Human + Machine > Human
            </Heading>
            <Layout>
              <Fill>
                <Heading fit size={3} textColor="tertiary">
                  Software eats the world...
                </Heading>
                <List margin="10px">
                  <ListItem padding="0px 10px">1997: Kasperov falls to chess robot</ListItem>
                  <ListItem padding="0px 10px">2016: AlphaGO champion defeated by Google AI (Deepmind) team</ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading fit size={3} textColor="tertiary">
                  Meanwhile in sports...
                </Heading>
                <List margin="10px">
                  <ListItem padding="0px 10px">2003: Moneyball</ListItem>
                  <ListItem padding="0px 10px">2016: some NHL teams (~1/3rd) take analytics seriously</ListItem>
                  <ListItem padding="0px 10px">Catapult, SportVu, Sportlogiq are interesting</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
           <Slide transition={["slide"]} bgImage={images.rink.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Which stats do correlate to winning?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Are they reliable?
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Can we use them to make smarter decisions?
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.high_corr.replace("/", "")} margin="0px auto 10px" height="400px"/>
            <Text textColor="primary" textFont="primary">
              High Correlation Metrics from 2008-2013 
              <Link margin="0 0 0 5px" href="http://www.pensionplanpuppets.com/2013/7/10/4508094/what-statistics-are-meaningful-in-a-given-season-corsi-fenwick-PDO-hits-fights-blocked-shots" target="_blank">
                via Steve Burtch
              </Link>
            </Text>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Ugly things made by those who strive to make something beautiful, while beautiful things are made by those who strive to make something useful.</Quote>
              <Cite>
                Oscar Wilde, 'The Value of Art in Modern Life', 1884
              </Cite>
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
          <Slide transition={["slide"]} bgImage={images.rink.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Which Player Is Better?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Left or Right?
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Top is best, bottom is worst
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="20px" margin="20px" width="66%" src={images.players.subban_slug.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="20px" margin="20px" width="66%" src={images.players.weber_slug.replace("/", "")}/>
              </Fill>
            </Layout>
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
                <Image padding="15px" margin="15px" width="66%" src={images.players.kopi_slug.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="15px" margin="15px" width="66%" src={images.players.ovi_slug.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="15px" margin="15px" width="100%" src={images.players.kopi.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="15px" margin="15px" width="100%" src={images.players.ovi.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="15px" margin="15px" width="66%" src={images.players.hall_slug.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="15px" margin="15px" width="66%" src={images.players.lars_slug.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Layout>
              <Fill>
                <Image padding="15px" margin="15px" width="100%" src={images.players.hall.replace("/", "")}/>
              </Fill>
              <Fill>
                <Image padding="15px" margin="15px" width="100%" src={images.players.lars.replace("/", "")}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>standardized measure of performance</ListItem></Appear>
              <Appear><ListItem>absolute vs. relative</ListItem></Appear>
              <Appear><ListItem>simple and illustrative</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>You can't outrun a bear!</Quote>
              <Cite>Unknown</Cite>
            </BlockQuote>
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
            <Heading size={5} textColor="black">
                <Link href="http://www.github.com/debraid">
                  Derek Braid
                </Link>
            </Heading>
            <Heading size={6} textColor="black">
              <Link href="https://twitter.com/Puck_Quant">
                @Puck_Quant
              </Link>
            </Heading>
            <Heading size={6} textColor="black">
              <Link href="https://twitter.com/Royal_Arse">
                @Royal_Arse
              </Link>
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
