import React, { useRef, useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.min.css";
import "./Testimonial.css";
// import "../Testimonial/TestiMonials/TestiMonials.css";
import img1 from "../../assets/partner_logo/Damante_Perfumes_Logo-removebg-preview (1).png";
import img2 from "../../assets/partner_logo/Etsy Profile Image.png";
import img3 from "../../assets/partner_logo/Logo_designs__1_-removebg-preview.png";
import img4 from "../../assets/partner_logo/logo_hcdc-removebg-preview (1).png";
import img5 from "../../assets/partner_logo/Olip Lighting Logo2.png";
import img6 from "../../assets/Life methods.png";
import img7 from "../../assets/partner_logo/s2-01 (1).png";
import img8 from "../../assets/partner_logo/WW_logo-removebg-preview-removebg-preview (1).png";
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
	const handleLastCardClick = () => {
		swiperRef.current.slideTo(0, 300);
	};

	return (
		<>
			<div id="testimonial">
				<div className="heading">
					<div className="text-center ">
						<h3 className="miniTitle">What people say about us</h3>
					</div>
					<h4 className=" sectionTitle text-center">Testimonials</h4>
					<Line />
				</div>
				<section className="swiper mySwiper">
					<div className="swiper-wrapper">
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(0)}>
							<div className="card__content">
								<p className="card__text">
									I have been a customer of this company for years, and I am
									continually impressed by their exceptional service. They
									always go above and beyond to ensure my needs are met, and I
									cannot recommend them enough!
								</p>
								<div className="card__image">
									<img src={img1} alt="card image" />
									<p className="card_name">Damante Perfume</p>
									<p className="card_description">
										Exceptional service, always goes above and beyond.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(1)}>
							<div className="card__content">
								<p className="card__text">
									I recently used this company's services, and I was blown away
									by the level of expertise and professionalism they
									demonstrated. They listened to my needs and provided a
									tailored solution that exceeded my expectations.
								</p>
								<div className="card__image">
									<img src={img2} alt="card image" />
									<p className="card_name">Concrie</p>
									<p className="card_description">
										Outstanding team, knowledgeable, and friendly.
									</p>
									<p className="start">⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(2)}>
							<div className="card__content">
								<p className="card__text">
									Working with this company was an absolute pleasure. They were
									professional, responsive, and delivered high-quality results.
									I would not hesitate to recommend them to anyone.
								</p>
								<div className="card__image">
									<img src={img3} alt="card image" />
									<p className="card_name">White Sands</p>
									<p className="card_description">
										Professional, responsive, and high-quality results.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(3)}>
							<div className="card__content">
								<p className="card__text">
									I have been searching for a reliable and affordable solution
									to my problem for months, and this company provided just
									that.I am grateful for their excellent customer service and
									commitment to helping me.
								</p>
								<div className="card__image">
									<img src={img4} alt="card image" />
									<p className="card_name">HCDC</p>
									<p className="card_description">
										Reliable, affordable, excellent customer service.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(4)}>
							<div className="card__content">
								<p className="card__text">
									I had a problem that I couldn't solve on my own, so I decided
									to reach out to this company for help. From start to finish,
									they were responsive, knowledgeable, and provided excellent
									service.
								</p>
								<div className="card__image">
									<img src={img5} alt="card image" />
									<p className="card_name">Olip</p>
									<p className="card_description">
										Top-notch products, unmatched customer service.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(5)}>
							<div className="card__content">
								<p className="card__text">
									The team at this company is outstanding. They are
									knowledgeable, friendly, and always willing to go the extra
									mile. I am so glad I chose to work with them and find a
									solution that worked for me.
								</p>
								<div className="card__image">
									<img src={img6} alt="card image" />
									<p className="card_name">Life Methods</p>
									<p className="card_description">
										Attentive, communicative, and achieved desired results.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleCardClick(6)}>
							<div className="card__content">
								<p className="card__text">
									I have been a loyal customer of this company for years, and I
									can honestly say they have never let me down. Their products
									and services are top-notch, and their customer service is
									unmatched.
								</p>
								<div className="card__image">
									<img src={img8} alt="card image" />
									<p className="card_name">Wall Paper World</p>
									<p className="card_description">
										Tailored solution, exceeded expectations with expertise and
										professionalism.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
						<div
							className="card swiper-slide"
							onClick={() => handleLastCardClick()} // Add click handler for last testimonial card
						>
							<div className="card__content">
								<p className="card__text">
									I had a great experience working with this company. They were
									attentive, communicative, and helped me achieve the results I
									was looking for. I highly recommend them to anyone looking for
									a reliable and trustworthy partner.
								</p>
								<div className="card__image">
									<img src={img7} alt="card image" />
									<p className="card_name">S2 Wheels</p>
									<p className="card_description">
										Responsive, knowledgeable, and efficient in solving
										problems.
									</p>
									<p>⭐⭐⭐⭐⭐</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="swiper-pagination"></div>
			</div>
		</>
	);
};

export default Testimonial;
