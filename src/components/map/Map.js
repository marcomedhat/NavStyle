import React, {Component} from 'react';
import './Map.css';

class Map extends Component{
	render() {
		return(
			<div className="container d-flex flex-row align-items-center mb-5 pb-5">
				<div className="message w-5">
					<h3 className="mb-4">Join our family now wherever you are</h3>
					<p>You can join us easily and increase your profits</p>
					<button type="button" className="btn btn-primary">Get Started</button>
				</div>
			</div>
		)
	}
}

export default Map;