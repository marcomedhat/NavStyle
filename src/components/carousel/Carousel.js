import React from "react";
import Slider from "react-slick";
import SliderArrow from "../Global/SliderArrow";
import "./Carousel.css";
import image1 from "./images/Layer498.png";
import image2 from "./images/Layer497.png";
import image3 from "./images/Layer496.png";

class SimpleSlider extends React.Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: <SliderArrow to="prev" />,
			nextArrow: <SliderArrow to="next" />
		};
		return (
			<div className="slideshow">
				<Slider {...settings}>
					<div>
						<a href="#">
							<img src={image1} alt="image1" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={image2} alt="image1" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={image3} alt="image1" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={image1} alt="image1" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={image2} alt="image1" />
						</a>
					</div>
					<div>
						<a href="#">
							<img src={image3} alt="image1" />
						</a>
					</div>
				</Slider>
			</div>
		);
	}
}

export default SimpleSlider;
