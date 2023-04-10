import React from "react";
const TestiMonialsDetails = ({ testiMonialDetail }) => {
	const { name, address, description, img } = testiMonialDetail;
	console.log("testiMonialDetail" + testiMonialDetail);
	return (
		<div class="item">
			<div class="shadow-effect">
				<div className="testimonial_upper">
					<p>{description}</p>
				</div>
				<div className="lower_part">
					<img class="img-circle" src={img} />
					<h4>{name}</h4>
					<p>Lorem ipsum dolor sit amet consectetur</p>
					<p>⭐⭐⭐⭐⭐</p>
				</div>
			</div>
		</div>
	);
};

export default TestiMonialsDetails;
