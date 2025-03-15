"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SingleDesk() {
	return (
		<section className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white p-30">
			<div className="md:w-1/2 text-center md:text-left space-y-4">
				<motion.h2
					className="text-7xl font-bold text-gray-800"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}>
					Rent <span className="text-red-600">a</span> Desk
				</motion.h2>

				<h1 className="text-5xl text-gray-800 mt-10">
					{" "}
					₹2999<span className="text-2xl">/month</span>
				</h1>
				<p>Includes all ammenities</p>
				<motion.a
					href="/contact"
					className="inline-block bg-yellow-400 text-black py-2 px-6 rounded-full hover:bg-yellow-500 transition"
					whileHover={{ scale: 1.05 }}>
					Book Your Desk Now
				</motion.a>
			</div>

			<motion.div
				className="md:w-1/2 flex justify-center mt-6 md:mt-0"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6 }}>
				<Image
					src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741864404/WhatsApp_Image_2025-03-13_at_14.33.46_2cb25daf-removebg-preview_mili8q.png"
					alt="Single Desk Workspace"
					width={450}
					height={450}
					className="rounded-lg shadow-md"
				/>
			</motion.div>
		</section>
	);
}
