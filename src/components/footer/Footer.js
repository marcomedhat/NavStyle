import React, {Component} from 'react';

class Footer extends Component {
	render() {
		return (
			<div className="d-flex bd-highlight mb-0">
			  <div className="p-2 bd-highlight">
				  <a href="#">
				  	<img src="/images/Layer500.png" alt="image1"/>
				  </a>
				</div>
			  <div className="ml-auto p-2 bd-highlight text-muted">
			  	<p>2019 Nasorg.com All Rights Reserved.</p>
			  </div>
			</div>
		)
	}
}

export default Footer;