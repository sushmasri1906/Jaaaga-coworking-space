"use client";

import { useState } from "react";
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
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		alert("Form submitted successfully!");
	};

	return (
		<section className="py-16 bg-white">
			<div className="max-w-5xl mx-auto px-6">
				{/* Location Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="bg-white p-6  border border-yellow-400">
					<h2 className="text-3xl font-bold text-center text-black">
						Our Locations
					</h2>
					<p className="text-center text-black mt-2">
						We provide coworking spaces across multiple locations.
					</p>
					<div className="mt-4 space-y-3 text-black">
						<p className="flex items-center">
							<FaMapMarkerAlt className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Service Areas:</strong> Ameerpet, S.R. Nagar, Begumpet,
							Kukatpally, KPHB
						</p>
						<p className="flex items-center">
							<FaMapMarkerAlt className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Administration Offices:</strong> Ameerpet, S.R. Nagar
						</p>
						<p className="flex items-center">
							<FaClock className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Operating Hours:</strong> 24/7
						</p>
						<p className="flex items-center">
							<FaClock className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Contact Timings:</strong> 10 AM - 7 PM
						</p>
					</div>
				</motion.div>

				{/* Contact Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="bg-white p-6  border border-red-600 mt-8">
					<h2 className="text-3xl font-bold text-center text-black">
						Contact Us
					</h2>
					<p className="text-center text-black mt-2">
						We&apos;d love to hear from you!
					</p>
					<div className="mt-4 space-y-4">
						<p className="flex items-center text-black">
							<FaMapMarkerAlt className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Address:</strong> Flat 102, RR Heights, Ameerpet,
							Hyderabad, Telangana 500038
						</p>
						<p className="flex items-center text-black">
							<FaPhoneAlt className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Phone:</strong>
							<Link href="tel:+919160666681" className="ml-1 text-black">
								+91 91606 66681
							</Link>
						</p>
						<p className="flex items-center text-black">
							<FaEnvelope className="text-yellow-400 mr-2 w-4 h-5" />
							<strong>Email:</strong>
							<Link
								href="mailto:officetoletinfo@gmail.com"
								className="ml-1 text-black">
								officetoletinfo@gmail.com
							</Link>
						</p>
					</div>

					{/* WhatsApp Group Invite */}
					<div className="mt-6 text-center">
						<p className="text-black text-lg font-semibold">
							Join our WhatsApp group for the latest updates:
						</p>
						<Link
							href="https://chat.whatsapp.com/YOUR_GROUP_INVITE_LINK"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-green-600 transition">
							<FaWhatsapp className="w-5 h-5 mr-2" />
							Join WhatsApp Group
						</Link>
					</div>

					{/* Contact Form */}
					<form className="mt-6 space-y-4" onSubmit={handleSubmit}>
						<input
							type="text"
							name="name"
							placeholder="Your Name"
							value={formData.name}
							onChange={handleChange}
							className="w-full p-3 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500"
							required
						/>
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							value={formData.email}
							onChange={handleChange}
							className="w-full p-3 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500"
							required
						/>
						<textarea
							name="message"
							placeholder="Your Message"
							rows={4}
							value={formData.message}
							onChange={handleChange}
							className="w-full p-3 border border-yellow-400 rounded focus:ring-2 focus:ring-yellow-500"
							required></textarea>
						<button
							type="submit"
							className="w-full bg-yellow-400 text-white py-3 rounded hover:bg-yellow-500 transition">
							Send Message
						</button>
					</form>
				</motion.div>
			</div>
		</section>
	);
};

export default Contact;
