"use client";

import { useState } from "react";
import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaClock,
	FaEnvelope,
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
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Contact Us
				</h2>
				<p className="text-center text-gray-800 mt-2">
					We&apos;d love to hear from you!
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
					<div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-400">
						<h3 className="text-xl font-semibold text-gray-800">
							Our Location
						</h3>
						<p className="text-gray-800 mt-2">
							Coworking Space in Hyderabad, Telangana
						</p>
						<div className="mt-4 space-y-4">
							<p className="flex items-center text-gray-800">
								<FaMapMarkerAlt className="text-yellow-400 mr-2 w-6 h-6" />
								<strong>Address:</strong> Flat 102, RR Heights, Ameerpet,
								Hyderabad, Telangana 500038
							</p>
							<p className="flex items-center text-gray-800">
								<FaClock className="text-yellow-400 mr-2" />
								<strong>Hours:</strong> Open 24 hours
							</p>
							<p className="flex items-center text-gray-800">
								<FaPhoneAlt className="text-yellow-400 mr-2" />
								<strong>Phone:</strong>
								<Link
									href="tel:+919160666681"
									className="text-gray-800 hover:underline">
									+91 91606 66681
								</Link>
							</p>
							<p className="flex items-center text-gray-800">
								<FaEnvelope className="text-yellow-400 mr-2" />
								<strong>Email:</strong>
								<Link
									href="mailto:officetoletinfo@gmail.com"
									className="text-gray-800 hover:underline">
									officetoletinfo@gmail.com
								</Link>
							</p>
						</div>
					</div>

					<div className="bg-white p-6 rounded-lg shadow-lg border border-yellow-400">
						<h3 className="text-xl font-semibold text-gray-800">
							Send Us a Message
						</h3>
						<form className="mt-4 space-y-4" onSubmit={handleSubmit}>
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
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
