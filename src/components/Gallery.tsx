"use client";

import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181140/21_spezbv.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181125/17_rhv5co.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743180953/1_trxlmj.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016067/15_zwnh58.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181176/28_x81h4v.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181121/16_yp9puv.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181028/7_hl716d.jpg",
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
	<div
		// className="absolute top-1/2 -translate-y-1/2 right-4 md:right-4
		// md:translate-y-0 bg-red-600 p-4 rounded-full cursor-pointer z-10 hover:bg-red-700 transition
		// sm:right-1/4 sm:translate-x-1/2"
		className="absolute flex flex-col items-center justify-center top-1/2 -right-1 md:right-4">
		<HiChevronRight className="text-white w-8 h-8" onClick={onClick} />
	</div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
	<div
		// className="absolute top-1/2 -translate-y-1/2 left-4 md:left-4
		// md:translate-y-0 bg-red-600 p-4 rounded-full cursor-pointer z-10 hover:bg-red-700 transition
		// sm:left-1/4 sm:-translate-x-1/2"
		className="absolute flex flex-col items-center justify-center top-1/2 -left-1 md:left-4 cursor-pointer z-10">
		<HiChevronLeft className="text-white w-8 h-8" onClick={onClick} />
	</div>
);

const Gallery = () => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		cssEase: "ease-in-out",
		appendDots: (dots) => (
			<div className="w-full flex justify-center mt-4">
				<ul className="flex space-x-2"> {dots} </ul>
			</div>
		),
		customPaging: () => (
			<div className="w-3 h-3 bg-gray-400 rounded-full hover:bg-red-500 transition-all"></div>
		),
	};

	return (
		<div className="w-full flex flex-col items-center bg-white relative">
			<h1 className="text-4xl md:text-5xl font-bold text-black my-4">
				Gallery
			</h1>

			<div className="w-full lg:w-[70%] overflow-hidden relative">
				<Slider {...settings} className="w-full">
					{images.map((src, index) => (
						<div
							key={index}
							className="w-full  flex justify-center items-center">
							<Image
								src={src}
								alt={`Gallery Image ${index + 1}`}
								width={1920}
								height={1080}
								className="w-full h-[75vh] object-cover mx-auto"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Gallery;
