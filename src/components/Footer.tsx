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
			className="bg-gray-900 text-white pt-11 relative mt-20">
			{/* CTA Box */}
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				whileHover={{ scale: 1.05, y: -5 }}
				whileTap={{ scale: 0.95 }}
				className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-yellow-400 text-center py-6 rounded-2xl shadow-xl px-6 md:px-12 cursor-pointer">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
					Ready to Elevate Your Work at{" "}
					<span className="text-white">Jaaaga Coworking Space?</span>
				</h2>

				<Link href="/contact">
					<motion.button
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-200">
						Join Now
					</motion.button>
				</Link>
			</motion.div>

			<div className="container mx-auto px-6 sm:px-8 md:px-12 mt-24">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* About Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						<h3 className="text-xl font-semibold text-yellow-400">
							Jaaaga Coworking Space
						</h3>
						<p className="text-gray-400 mt-2 text-sm leading-relaxed">
							A premium coworking space in Hyderabad designed for startups,
							freelancers, and professionals.
						</p>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<h3 className="text-xl font-semibold text-yellow-400">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2 text-gray-400 text-sm">
							{["About Us", "Location", "Workspace", "Contact Us"].map(
								(item, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -10 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}>
										<Link
											href={`/${item.toLowerCase().replace(" ", "")}`}
											className="hover:text-yellow-400 transition">
											{item}
										</Link>
									</motion.li>
								)
							)}
						</ul>
					</motion.div>

					{/* Contact Details */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}>
						<h3 className="text-xl font-semibold text-yellow-400">
							Get in Touch
						</h3>
						<p className="text-gray-400 mt-3 text-sm">📍 Ameerpet, Hyderabad</p>
						<p className="text-gray-400 text-sm">
							✉️{" "}
							<Link
								href="mailto:officetoletinfo@gmail.com"
								className="text-yellow-400 hover:underline">
								officetoletinfo@gmail.com
							</Link>
						</p>
						<p className="text-gray-400 text-sm flex items-center">
							📞{" "}
							<Link
								href="tel:+919160666681"
								className="text-yellow-400 hover:underline ml-1">
								+91 9160666681
							</Link>
							<span className="ml-2 text-gray-400">| Manager: Rajesh</span>
						</p>
					</motion.div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} Jaaaga Coworking Space. All Rights
						Reserved.
					</p>
					<div className="flex space-x-6 m-3 md:mt-0">
						{["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
							(platform, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}>
									<Link href="#" className="hover:text-yellow-400 transition">
										{platform}
									</Link>
								</motion.div>
							)
						)}
					</div>
				</div>
			</div>
		</motion.footer>
	);
};

export default Footer;
