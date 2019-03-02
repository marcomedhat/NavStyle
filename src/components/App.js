import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Hero from "./hero-section/Hero";
import FirstSlogan from "./slogan/FirstSlogan";
import FirstSection from "./section1/FirstSection";
import SecondSlogan from "./slogan/SecondSlogan";
import SecondSection from "./section2/SecondSection";
import SimpleSlider from "./carousel/Carousel";
import ThirdSlogan from "./slogan/ThirdSlogan";
import Grid from "./grid/Grid";
import FourthSlogan from "./slogan/FourthSlogan";
import Map from "./map/Map";
import Countries from "./countries/Countries";
import Footer from "./footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="mh-100">
          <Hero />
          <FirstSlogan />
          <FirstSection />
          <SecondSlogan />
          <SecondSection />
          <SimpleSlider />
          <ThirdSlogan />
          <Grid />
          <FourthSlogan />
          <Map />
          <Countries />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
