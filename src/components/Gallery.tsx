"use client";

import React from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743180953/1_trxlmj.jpg",

	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743180987/3_e0awoa.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181016/5_vcngb3.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181020/6_cw2jvg.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181028/7_hl716d.jpg",

	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181074/8_arez55.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181076/9_u39ifg.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181092/13_w3sphx.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181085/12_ypzyb3.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181121/16_yp9puv.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181112/15_cc5ykp.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181128/18_nswkgf.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181125/17_rhv5co.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181134/20_k93kvr.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181130/19_n6tlnj.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181140/21_spezbv.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181137/22_yjvj3x.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181151/23_eo6k9v.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181148/29_bzu0ec.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181145/24_ovar2v.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181165/25_flhbw1.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181162/24_vywo0h.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181174/27_hgtjh9.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181171/29_hf7ptk.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181183/32_qlofxg.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181180/30_xzt8es.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181176/28_x81h4v.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181186/31_ggqkht.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181189/33_vrkpaj.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1743181687/34_pcqoay.jpg",
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
			{/* Gallery Heading */}
			<h1 className="text-4xl md:text-5xl font-bold text-black my-4">
				Gallery
			</h1>

			{/* Responsive Slider */}
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
