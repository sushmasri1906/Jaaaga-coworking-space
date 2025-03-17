"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SingleDesk() {
	return (
		<section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white px-6 py-16">
			{/* Text Content */}
			<div className="md:w-1/2 text-center md:text-left space-y-6">
				<motion.h2
					className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Rent <span className="text-red-600">a</span> Desk
				</motion.h2>

				<h1 className="text-3xl md:text-5xl text-gray-800">
					₹2999<span className="text-lg md:text-2xl">/month</span>
				</h1>
				<p className="text-base text-gray-600">Includes all amenities</p>

				<motion.div whileHover={{ scale: 1.05 }} className="mt-4">
					<Link
						href="/contact"
						className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300">
						Book Your Desk Now
					</Link>
				</motion.div>
			</div>

			{/* Image Section */}
			<motion.div
				className="md:w-1/2 flex justify-center mt-8 md:mt-0"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}>
				<Image
					src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741864404/WhatsApp_Image_2025-03-13_at_14.33.46_2cb25daf-removebg-preview_mili8q.png"
					alt="Single Desk Workspace"
					width={450}
					height={450}
					className="w-full max-w-xs sm:max-w-md md:max-w-lg"
				/>
			</motion.div>
		</section>
	);
}
