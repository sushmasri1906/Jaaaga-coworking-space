"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015914/1_advary.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015949/6_jcwlvn.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015959/2_excv8j.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015966/3_d4gvc5.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015974/4_stg4kp.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015980/5_qfbnhz.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015985/7_jenhbd.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015980/5_qfbnhz.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742015985/7_jenhbd.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016008/10_aquzdq.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016014/11_eywwv2.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016036/12_axncda.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016008/10_aquzdq.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016036/12_axncda.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016047/13_cnij3p.jpg",
	"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1742016076/16_rdvqwj.jpg",
];

const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center p-1 bg-white">
			{/* Main Heading */}
			<motion.h1
				className="text-5xl md:text-6xl font-bold text-gray-800 mb-8"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}>
				Gallery
			</motion.h1>

			{/* Gallery Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 w-full max-w-8xl">
				{images.map((src, index) => (
					<motion.div
						key={index}
						className="overflow-hidden cursor-pointer"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						onClick={() => setSelectedImage(src)}>
						<Image
							src={src}
							alt={`Gallery Image ${index + 1}`}
							width={500}
							height={700}
							className="w-full h-auto  transition-transform transform hover:scale-105"
						/>
					</motion.div>
				))}
			</div>

			{selectedImage && (
				<div
					className="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center p-2 z-50"
					onClick={() => setSelectedImage(null)}>
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.3 }}
						className="relative max-w-full max-h-full">
						<Image
							src={selectedImage}
							alt="Selected"
							width={2000}
							height={1600}
							className="w-full h-auto max-w-8xl max-h-screen object-fit "
						/>
					</motion.div>
				</div>
			)}
		</div>
	);
};

export default Gallery;
