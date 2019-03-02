import React, { Component } from "react";
import image1 from "./images/Layer500.png";

class Footer extends Component {
	render() {
		return (
			<div className="d-flex bd-highlight mb-0">
				<div className="p-2 bd-highlight">
					<a href="#">
						<img src={image1} alt="image1" />
					</a>
				</div>
				<div className="ml-auto p-2 bd-highlight text-muted">
					<p>2019 Nasorg.com All Rights Reserved.</p>
				</div>
			</div>
		);
	}
}

export default Footer;
