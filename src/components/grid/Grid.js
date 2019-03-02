import React, { Component } from "react";
import "./Grid.css";
import image1 from "./images/template.png";
import image2 from "./images/diamond.png";
import image3 from "./images/world.png";
import image4 from "./images/smartphone.png";
import image5 from "./images/shop.png";
import image6 from "./images/pen.png";
import image7 from "./images/roll.png";
import image8 from "./images/pic.png";
import image9 from "./images/hash.png";
import image10 from "./images/circle.png";
import image11 from "./images/card.png";
import image12 from "./images/sheet.png";

class Grid extends Component {
	render() {
		return (
			<div className="container mb-5 pb-5">
				<div className="row mb-5">
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image1} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Stunning Templates</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deserunt velit ratione perferendis laudantium in assumenda
								tenetur inventore odit, recusandae.
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image2} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Total Design Freedom</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
								non tempora quae accusamus beatae rerum impedit fugiat cumque
								reprehenderit.
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image3} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Industry-Leading SEO</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
								laboriosam sunt nostrum laborum numquam adipisci expedita quo,
								impedit praesentium.
							</p>
						</div>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image4} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Mobile Optimized</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
								eaque vero suscipit aperiam, laborum voluptatem sit doloribus
								obcaecati dolorum!
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image5} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>App Market</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Voluptatibus consequatur sequi quas, placeat aliquid amet
								dolores aliquam voluptatem rerum.
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image6} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Unlimited Fonts</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Deleniti maiores saepe, placeat laborum pariatur tempora nobis
								tempore sunt dolorum!
							</p>
						</div>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image7} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Scroll Effects</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Consequatur, cumque facere beatae ipsa consequuntur facilis
								distinctio libero odit praesentium!
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image8} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Media Galleries</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
								excepturi maiores quaerat dolorem saepe, animi exercitationem
								dicta qui non?
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image9} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Advanced Code Capability</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
								adipisci qui eveniet dolores doloribus! Architecto minima alias,
								laboriosam illum!
							</p>
						</div>
					</div>
				</div>
				<div className="row mb-5">
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image10} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Repeating Layouts</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Consequatur, cumque facere beatae ipsa consequuntur facilis
								distinctio libero odit praesentium!
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image11} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Multiple Payment Methods</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
								excepturi maiores quaerat dolorem saepe, animi exercitationem
								dicta qui non?
							</p>
						</div>
					</div>
					<div className="col px-4">
						<div className="icon-holder d-flex mb-5 ml-3 justify-content-center align-items-center">
							<img src={image12} alt="image1" className="icon" />
						</div>
						<div className="paragraph">
							<h4>Custom Interactions</h4>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
								adipisci qui eveniet dolores doloribus! Architecto minima alias,
								laboriosam illum!
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Grid;
