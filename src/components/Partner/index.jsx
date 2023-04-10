import React from "react";
import { Link } from "react-router-dom";
// import './assets';
import L1 from "../../assets/Life_methods-removebg-preview.png";
import L2 from "../../assets/logo.png";
import L3 from "../../assets/wallpaper_world.jpeg";

import "./index.css";
import Line from "../Line";
export default function index() {
	return (
		<div className="main_container">
			{/* <div className="filter_container">
				<li to="/">All</li>
				<li to="/">Auto & tech</li>
				<li to="/">Beauty</li>
				<li to="/">Fashion</li>
				<li to="/">Other</li>
				<li to="/">Ott</li>
				<li to="/">Travel</li>
			</div> */}
			<p>Awesome people we work with</p>
			<h1>Our Clientele</h1>
			<Line />
			<div className="logo_container">
				<div className="image">
					<a to="https://www.lifemethods.in/" target={"_blank"}>
						<img src={L1} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a to="https://www.thefuelmedia.co/" target={"_blank"}>
						<img src={L2} alt="logo" />
					</a>
				</div>
				{/* <div className="image">
					<a href="https://www.wallpaperworld.co.in/" target={"_blank"}>
						<img src={L3} alt="logo" />
					</a>
				</div> */}
				<div className="image">
					<a to="https://www.lifemethods.in/" target={"_blank"}>
						<img src={L1} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a to="https://www.thefuelmedia.co/" target={"_blank"}>
						<img src={L2} alt="logo" />
					</a>
				</div>
				<div className="image">
					<a to="https://www.lifemethods.in/" target={"_blank"}>
						<img src={L1} alt="logo" />
					</a>
				</div>

				<div className="image">
					<a to="https://www.thefuelmedia.co/" target={"_blank"}>
						<img src={L2} alt="logo" />
					</a>
				</div>
				{/* <div className="image">
					<a href="https://www.wallpaperworld.co.in/" target={"_blank"}>
						<img src={L3} alt="logo" />
					</a>
				</div> */}
			</div>
		</div>
	);
}
