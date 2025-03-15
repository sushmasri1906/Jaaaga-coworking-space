"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="bg-black text-black pt-11 relative mt-20">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-yellow-400 text-center py-6 rounded-2xl shadow-xl px-6 md:px-12">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-red-600">
					Gain Office Culture at{" "}
					<h2 className="text-black mt-1">Jaaaga Coworking Space?</h2>
				</h2>
				<Link href="/contact">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-200">
						Join Now
					</motion.button>
				</Link>
			</motion.div>

			<div className="container mx-auto px-6 sm:px-8 md:px-12 mt-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<h3 className="text-xl font-semibold text-yellow-400">
							Jaaaga Coworking Space
						</h3>
						<p className="text-white mt-2 text-sm leading-relaxed">
							A premium coworking space in Hyderabad designed for startups,
							freelancers, and professionals.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h3 className="text-xl font-semibold text-yellow-400">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2 text-white text-sm">
							{[
								{ name: "About Us", path: "/about" },
								{ name: "Location", path: "/contact" },
								{ name: "Support Services", path: "/services" },
								{ name: "Contact Us", path: "/contact" },
							].map((link, index) => (
								<motion.li
									key={index}
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}>
									<Link
										href={link.path}
										className="hover:text-yellow-400 transition">
										{link.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						<h3 className="text-xl font-semibold text-yellow-400">Contact</h3>
						<p className="text-white mt-2 text-sm leading-relaxed">
							📍 Hyderabad, India
							<br /> 📞 +91 91606 66681
							<br /> ✉️ info@jaaaga.com
						</p>
					</motion.div>
				</div>

				<div className="border-t border-white mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-white">
					<p>
						&copy; {new Date().getFullYear()} Jaaaga Coworking Space. All Rights
						Reserved.
					</p>
					<div className="flex space-x-6 m-3 md:mt-0">
						{["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
							(name, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									<Link
										href="#"
										aria-label={`${name} Page`}
										className="hover:text-yellow-400 transition">
										{name}
									</Link>
								</motion.div>
							)
						)}
					</div>
				</div>

				<div className="text-center text-white text-sm mt-4 pb-6">
					Developed by{" "}
					<Link
						href="https://hsdev.in"
						target="_blank"
						className="text-yellow-400 hover:underline">
						hsdev.in
					</Link>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
