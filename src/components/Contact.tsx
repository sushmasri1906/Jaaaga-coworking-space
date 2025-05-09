"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaClock,
	FaEnvelope,
	FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
	return (
		<section className="py-20 bg-white">
			<div className="max-w-5xl mx-auto px-6 sm:px-8">
				{/* Location Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="bg-white p-6 sm:p-8 border border-yellow-400 rounded-lg shadow-lg space-y-6">
					<h2 className="text-3xl font-bold text-center text-black">
						Our Locations
					</h2>
					<p className="text-center text-gray-600 text-lg">
						We provide coworking spaces across multiple locations.
					</p>
					<div className="mt-6 space-y-4 text-gray-800">
						<div className="flex items-center gap-3">
							<FaMapMarkerAlt className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Service Areas:</strong> Ameerpet, S.R. Nagar, Begumpet,
								Kukatpally, KPHB
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaMapMarkerAlt className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Administration Offices:</strong> Ameerpet, S.R. Nagar
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaClock className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Operating Hours:</strong> 24/7
							</p>
						</div>
						<div className="flex items-center gap-3">
							<FaClock className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Contact Timings:</strong> 10 AM - 7 PM
							</p>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="bg-white p-6 sm:p-8 border border-red-600 rounded-lg shadow-lg mt-10 space-y-6">
					<h2 className="text-3xl font-bold text-center text-black">
						Contact Us
					</h2>
					<p className="text-center text-gray-600 text-lg">
						We&apos;d love to hear from you!
					</p>
					<div className="mt-6 space-y-5">
						<div className="flex items-center gap-3 text-gray-800">
							<FaMapMarkerAlt className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Address:</strong> Flat 102, RR Heights, Ameerpet,
								Hyderabad, Telangana 500038
							</p>
						</div>
						<div className="flex items-center gap-3 text-gray-800">
							<FaPhoneAlt className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Phone:</strong>
								<Link href="tel:+919160666681" className="ml-1 text-black">
									+91 91606 66681
								</Link>
							</p>
						</div>
						<div className="flex items-center gap-3 text-gray-800">
							<FaEnvelope className="text-yellow-400 w-4 h-4" />
							<p>
								<strong>Email:</strong>
								<Link
									href="mailto:officetoletinfo@gmail.com"
									className="ml-1 text-black">
									officetoletinfo@gmail.com
								</Link>
							</p>
						</div>
					</div>

					<div className="mt-8 text-center">
						<p className="text-black text-lg font-semibold">
							Join our WhatsApp group for the latest updates:
						</p>
						<Link
							href="https://chat.whatsapp.com/HYkCqW308vE1Um9c1Z1NEV"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center bg-green-500 text-white px-5 py-3 rounded-lg mt-3 hover:bg-green-600 transition">
							<FaWhatsapp className="w-5 h-5 md:w-6 md:h-6 mr-2" />
							Join WhatsApp Group
						</Link>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
