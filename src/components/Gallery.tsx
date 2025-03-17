"use client";

import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015914/1_advary.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015949/6_jcwlvn.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015959/2_excv8j.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015966/3_d4gvc5.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015974/4_stg4kp.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015980/5_qfbnhz.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015985/7_jenhbd.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016008/10_aquzdq.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016014/11_eywwv2.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016036/12_axncda.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016047/13_cnij3p.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016076/16_rdvqwj.jpg",
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
	<div
		className="absolute top-1/2 -translate-y-1/2 right-4 md:right-4 
		md:translate-y-0 bg-red-600 p-4 rounded-full cursor-pointer z-10 hover:bg-red-700 transition
		sm:right-1/4 sm:translate-x-1/2">
		<HiChevronRight className="text-white w-8 h-8" onClick={onClick} />
	</div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
	<div
		className="absolute top-1/2 -translate-y-1/2 left-4 md:left-4 
		md:translate-y-0 bg-red-600 p-4 rounded-full cursor-pointer z-10 hover:bg-red-700 transition
		sm:left-1/4 sm:-translate-x-1/2">
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
			{/* Gallery Heading */}
			<h1 className="text-4xl md:text-5xl font-bold text-black my-4">
				Gallery
			</h1>

			{/* Responsive Slider */}
			<div className="w-full h-[45vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh] xl:h-[80vh] max-w-8xl overflow-hidden relative">
				<Slider {...settings} className="w-full h-full">
					{images.map((src, index) => (
						<div
							key={index}
							className="w-full h-full flex justify-center items-center">
							<Image
								src={src}
								alt={`Gallery Image ${index + 1}`}
								width={1920}
								height={1080}
								className="w-full h-full object-cover"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Gallery;
