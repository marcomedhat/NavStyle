import React, { Component } from "react";
import "./Main.css";
import image1 from "./images/Layer490.png";

class Main extends Component {
	render() {
		return (
			<div className="main d-flex flex-row mr-0 pr-0">
				<div className="title w-50 pb-5 mt-5 pr-3 pl-3">
					<h1>
						<strong>Choose</strong> examples to show products to your customers
					</h1>
					<p>Our sevices are not to be reckoned with upload</p>
					<p>
						Products can slipingin your home and see theyou an edge over the
						online cometitors.of big businesses data
					</p>
					<button type="button" className="btn btn-light text-primary">
						Get Started
					</button>
				</div>
				<div className="hero-image w-50 h-100">
					<img src={image1} alt="image1" className="w-100 h-100" />
				</div>
			</div>
		);
	}
}

export default Main;
