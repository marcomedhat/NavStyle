import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="Hero mh-100 mb-5 pb-5">
		<Header />
		<Main />
      </div>
    );
  }
}

export default Hero;