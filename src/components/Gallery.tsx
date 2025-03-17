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
		className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-3 rounded-full cursor-pointer z-10 hover:bg-red-700 transition"
		onClick={onClick}>
		<HiChevronRight className="text-white w-6 h-6" />
	</div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
	<div
		className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-red-600 p-3 rounded-full cursor-pointer z-10 hover:bg-red-700 transition"
		onClick={onClick}>
		<HiChevronLeft className="text-white w-6 h-6" />
	</div>
);

const Gallery = () => {
	const settings: Settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		pauseOnHover: false,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		cssEase: "linear",
		appendDots: (dots) => (
			<div className="w-full flex justify-center mt-4">
				<ul className="flex justify-center items-center gap-1"> {dots} </ul>
			</div>
		),
		customPaging: () => (
			<div className="w-2 h-2 bg-gray-400 rounded-full hover:bg-red-500 transition-all"></div>
		),
	};
	return (
		<div className="w-screen flex flex-col items-center bg-white relative pb-16">
			{/* Gallery Heading */}
			<h1 className="text-4xl md:text-5xl font-bold text-black my-4">
				Gallery
			</h1>

			{/* Responsive Slider */}
			<div className="w-full min-h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] max-w-8xl overflow-hidden shadow-xl relative">
				<Slider {...settings} className="w-full h-full">
					{images.map((src, index) => (
						<div
							key={index}
							className="w-full min-h-[40vh] sm:h-[50vh] md:h-[65vh] lg:h-[75vh] flex justify-center items-center relative">
							<Image
								src={src}
								alt={`Gallery Image ${index + 1}`}
								width={1920}
								height={1080}
								className="w-full h-full object-cover aspect-[16/9]"
							/>
						</div>
					))}
				</Slider>
			</div>
		</div>
	);
};

export default Gallery;
