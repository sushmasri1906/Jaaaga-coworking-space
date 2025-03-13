"use client";

import { motion } from "framer-motion";
import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
	{
		name: "Kadavandah Harish",
		review:
			"A good workspace with excellent service provided by the team management.",
		rating: 5,
	},
	{
		name: "Nikhil Landeri",
		review:
			"Nice co-working space with all the facilities at low cost. The owner is very humble and polite.",
		rating: 4,
	},
	{
		name: "Ravi Govada",
		review:
			"This is an economic space for startups. We found good management, maintenance, and security.",
		rating: 5,
	},
	{
		name: "Hari 100",
		review:
			"Best place to have an office-like workspace, with a homely nature and peaceful environment.",
		rating: 4,
	},
	{
		name: "Phanikumar Uddanti",
		review:
			"Nice environment. Near to Main Road. Good support from the owner. Low-cost seats available.",
		rating: 5,
	},
];

const renderStars = (rating: number) => {
	return (
		<div className="flex mt-2">
			{[...Array(5)].map((_, index) =>
				index < rating ? (
					<FaStar key={index} className="text-yellow-500 text-lg" />
				) : (
					<FaRegStar key={index} className="text-gray-300 text-lg" />
				)
			)}
		</div>
	);
};

const Testimonials = () => {
	return (
		<section
			className="relative py-16 text-center bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741857657/WhatsApp_Image_2025-03-13_at_14.50.15_9d945515_r33ufg.jpg')",
			}}>
			<div className="relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-2xl font-extrabold text-white">
					What Our Members Say
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-gray-800 mt-2">
					Reviews from happy members
				</motion.p>

				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
							}}
							className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
							<FaUserCircle className="text-gray-400 text-6xl" />
							<h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
							{renderStars(testimonial.rating)}
							<p className="text-gray-600 mt-2 italic">{testimonial.review}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
