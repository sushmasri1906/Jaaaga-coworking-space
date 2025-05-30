"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

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
		<div className="container mx-auto px-6 py-20 text-center bg-white">
			<h2 className="text-3xl font-bold text-black mb-6">
				Our Additional Services
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

	
			<div className="p-8 bg-yellow-400 max-w-5xl mx-auto text-left rounded-xl shadow-lg">
				<h3 className="text-2xl font-semibold text-black mb-4">
					Website Development Services
				</h3>
				<div className="flex flex-col md:flex-row gap-6 items-center">
					<Image
						src="https://res.cloudinary.com/dnm8hsk5l/image/upload/v1748600947/Yellow-Modern-Creative-Corporate-Social-Media-Strategy-Presentation--19-_tw4tpp.png"
						alt="Website Development"
						width={500}
						height={300}
						className="rounded-lg shadow-md"
					/>
					<div>
						<p className="text-gray-700 mb-4">
							Get a stunning, responsive, and optimized website for your
							business. We build everything from portfolio sites to powerful web
							apps.
						</p>

					
						<div className="text-black font-semibold text-lg mb-4">
							📞 Contact Number : +91 8919624323
							<div className="mt-2 flex gap-3">
								<a
									href="https://wa.me/918919624323"
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 bg-green-600 text-white py-2 px-2 rounded-full hover:bg-green-700 transition">
									<FaWhatsapp size={18} />
								</a>
								<a
									href="tel:+918919624323"
									className="flex items-center gap-2 bg-blue-600 text-white py-2 px-2 rounded-full hover:bg-blue-700 transition">
									<FaPhoneAlt size={18} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
