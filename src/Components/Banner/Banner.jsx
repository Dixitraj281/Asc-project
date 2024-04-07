// Filename - ImageSlider.js

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./images.css";
import React from "react";

const Banner = ({ images }) => {
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 6000,
	};
	return (
		<>
			<div className="imgslider">
				<Slider {...settings}>
					{images.map((item) => (
						<div key={item.id} className="">
							<img
								src={item.src}
								alt={item.alt}
							/>
						</div>
					))}
				</Slider>
			</div>
		</>
	);
};
export default Banner;