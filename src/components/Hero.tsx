"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="relative h-screen flex items-center justify-center text-center text-white"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741324130/12_Seats_Ac_2_klksqn.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}>
			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1, ease: "easeOut" }}
				className="relative z-10 max-w-3xl px-6 bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg">
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
					className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
					Welcome to{" "}
					<span className="text-yellow-500">Jaaaga Coworking Space</span>
				</motion.h1>

				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
					className="mt-4 text-lg md:text-xl font-medium text-gray-200">
					A premium coworking space designed for freelancers, startups, and
					businesses to thrive.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
					className="mt-6 flex justify-center space-x-4">
					<Link href="/contact">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all shadow-md">
							Contact Us
						</motion.button>
					</Link>
					<Link href="/contact">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="border border-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shadow-md">
							Location
						</motion.button>
					</Link>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default Hero;
