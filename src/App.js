import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/hero-section/Hero";
import FirstSlogan from "./components/slogan/FirstSlogan";
import FirstSection from "./components/section1/FirstSection";
import SecondSlogan from "./components/slogan/SecondSlogan";
import SecondSection from "./components/section2/SecondSection";
import SimpleSlider from "./components/carousel/Carousel";
import ThirdSlogan from "./components/slogan/ThirdSlogan";
import Grid from "./components/grid/Grid";
import FourthSlogan from "./components/slogan/FourthSlogan";
import Map from "./components/map/Map";
import Countries from "./components/countries/Countries";
import Footer from "./components/footer/Footer";

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
