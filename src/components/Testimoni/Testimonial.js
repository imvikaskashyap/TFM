import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Testimonial.css";
// import "../Testimonial/TestiMonials/TestiMonials.css";
import img1 from "../../assets/sarthak.png";
import Line from "../Line";

const Testimonial = () => {
	const swiperRef = useRef(null);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		swiperRef.current = new Swiper(".mySwiper", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			dots: true,
			slidesPerView: "auto",
			spaceBetween: 60,
			initialSlide: 1,
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 600,
				modifier: 1,
				slideShadows: false,
			},
			pagination: {
				el: ".swiper-pagination",
			},
		});

		// Update swiper on component unmount
		return () => {
			swiperRef.current.destroy();
		};
	}, []);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		// Remove event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (swiperRef.current) {
			swiperRef.current.params.slidesPerView = isSmallScreen ? 1 : "auto";
			swiperRef.current.params.spaceBetween = isSmallScreen ? 20 : 60;
			swiperRef.current.update();
		}
	}, [isSmallScreen]);

	const handleCardClick = (index) => {
		swiperRef.current.slideTo(index, 300);
	};

	return (
		<>
			<div className="heading">
				<div className="text-center ">
					<h3 className="miniTitle">What people say about us</h3>
				</div>
				<h4 className=" sectionTitle text-center">Testimonials</h4>
				<Line />
			</div>
			<section className="swiper mySwiper">
				<div className="swiper-wrapper">
					<div className="card swiper-slide" onClick={() => handleCardClick(0)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p>⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
					<div className="card swiper-slide" onClick={() => handleCardClick(1)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p className="start">⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
					<div className="card swiper-slide" onClick={() => handleCardClick(2)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p>⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
					<div className="card swiper-slide" onClick={() => handleCardClick(3)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p>⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
					<div className="card swiper-slide" onClick={() => handleCardClick(4)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p>⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
					<div className="card swiper-slide" onClick={() => handleCardClick(5)}>
						<div className="card__content">
							<p className="card__text">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
								veritatis labore provident non tempora odio est sunt, ipsum
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Architecto, voluptas.
							</p>
							<div className="card__image">
								<img src={img1} alt="card image" />
								<p className="card_name">John Doe</p>
								<p className="card_description">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
								</p>
								<p>⭐⭐⭐⭐⭐</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="swiper-pagination"></div>
		</>
	);
};

export default Testimonial;
