"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="bg-gray-50 text-gray-900">
			<motion.div
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="relative w-full h-[400px] flex items-center justify-center text-center">
				<Image
					src="https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741419739/plain-yellow-background-sz8rral13llcyqn8_abhjsu.png"
					alt="Jaaaga Coworking Space"
					fill
					className="object-cover brightness-75"
					priority
				/>
				<h1 className="absolute text-black text-4xl md:text-5xl font-bold drop-shadow-lg">
					About Us
				</h1>
			</motion.div>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
				<motion.h2
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.2 }}
					className="text-4xl md:text-5xl font-bold text-center text-black">
					Jaaaga Coworking Space
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
					className="text-center text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
					A vibrant coworking space in Hyderabad designed for professionals,
					startups, and freelancers, offering world-class amenities and a
					collaborative environment.
				</motion.p>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-2xl">
						<h3 className="text-2xl font-semibold text-gray-900">
							Why Choose Us?
						</h3>
						<p className="text-gray-700 mt-3 leading-relaxed">
							Jaaaga Coworking Space provides a{" "}
							<strong>comfortable, productive, and inspiring</strong> work
							environment. Whether you&apos;re a startup, an entrepreneur, or a
							freelancer, our space is built to foster{" "}
							<strong>creativity, collaboration, and networking</strong>.
						</p>
						<ul className="mt-5 space-y-4 text-gray-700">
							{[
								"Separate Washroom & Water Facilities",
								"24/7 Security & Power Backup",
								"Flexible Office Space & Rent Plans",
								"Ideal for Startups, Workshops, and Training",
							].map((item, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.8, delay: 0.7 + index * 0.2 }}
									className="flex items-center">
									<span className="text-yellow-400 text-xl mr-3">✔</span>
									<strong>{item}</strong>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-2xl">
						<h3 className="text-2xl font-semibold text-gray-900">
							Our Community
						</h3>
						<p className="text-gray-700 mt-3 leading-relaxed">
							We believe in{" "}
							<strong>collaboration, innovation, and growth</strong>. Our
							coworking space connects{" "}
							<strong>freelancers, startups, and businesses</strong> to foster a
							thriving professional ecosystem.
						</p>
						<p className="mt-5 text-gray-700">
							Whether you need a{" "}
							<strong>
								dedicated desk, a meeting room, or a private office
							</strong>
							, we have the perfect space for you.
						</p>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 1, delay: 0.8 }}
					className="text-center mt-12">
					<Link
						href="/contact"
						className="bg-yellow-400 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
						Get in Touch
					</Link>
				</motion.div>
			</motion.div>
		</motion.section>
	);
};

export default About;
