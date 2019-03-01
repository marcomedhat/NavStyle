import React, { Component } from 'react';
import './FirstSection.css';

class FirstSection extends Component {
  render() {
    return (
      <div className="first-section">
	      <div className="contents d-flex flex-row align-items-center mb-5 pb-5 ml-n5 pl-0">
	      	<img src="/images/Group29.png" alt="image1" className="w-50 align-self-start"/>
					<div className="title w-50 align-self-end">
						<p>You'll get the device wherever you are</p>
						<h4><span>Multiple</span> forms you can modify to suit your needs and customers</h4>
						<p>here at NasNav we Designed a device called the route box that plugs into a stores barcode scanner. 
						The box Picks up products UPC codes, and uses that to populate a website of the Products here at NasNav we 
						Designed a device called the route box</p>
						<button type="button" className="btn btn-primary">Get Started</button>
					</div>
				</div>
      </div>
    );
  }
}

export default FirstSection;