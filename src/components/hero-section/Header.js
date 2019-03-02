import React, { Component } from "react";
import "./Header.css";
import image1 from "./images/logo.png";

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg mt-0 pt-0">
				<a className="navbar-brand" href="#">
					<img src={image1} alt="" />
				</a>
				<ul className="navbar-nav mx-auto">
					<li className="nav-item mx-3">
						<a className="nav-link active" href="#">
							Navbox
						</a>
					</li>
					<li className="nav-item mx-3">
						<a className="nav-link" href="#">
							NavStyle
						</a>
					</li>
					<li className="nav-item mx-3">
						<a className="nav-link" href="#">
							Shopping
						</a>
					</li>
					<li className="nav-item mx-3">
						<a className="nav-link" href="#">
							360 Editor
						</a>
					</li>
					<li className="nav-item mx-3">
						<a className="nav-link" href="#">
							Dashboard
						</a>
					</li>
				</ul>
				<button type="button" className="btn btn-light text-primary">
					Get Started
				</button>
			</nav>
		);
	}
}

export default Header;
