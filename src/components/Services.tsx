"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
	"Virtual Office Space",
	"Private Office Space",
	"Dedicated Office Space",
	"Commercial Space",
	"Company Registration",
	"GST Registrations and Filings",
];

const Services = () => {
	return (
		<div className="container mx-auto px-6 py-30 text-center bg-white">
			<h2 className="text-3xl font-bold text-black mb-6">
				Our Additional Services
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{services.map((service, index) => (
					<Link key={index} href="/contact" className="flex justify-center">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="w-full max-w-xs bg-yellow-400 text-black font-semibold py-3 px-6 rounded-2xl shadow-md hover:bg-yellow-500 transition duration-300">
							{service}
						</motion.button>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Services;
