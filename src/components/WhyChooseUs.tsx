"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
	const features = [
		{
			icon: "📍",
			title: "Prime Location",
			description:
				"Easily accessible in the heart of Hyderabad, surrounded by cafes and transport hubs.",
		},
		{
			icon: "💰",
			title: "Affordable Pricing",
			description:
				"Cost-effective coworking space with flexible plans for freelancers and startups.",
		},
		{
			icon: "📶",
			title: "High-Speed Internet",
			description:
				"Reliable WiFi ensures uninterrupted work and smooth video calls.",
		},
		{
			icon: "⏰",
			title: "24/7 Access",
			description:
				"Work at any time that suits your schedule, with round-the-clock access.",
		},
		{
			icon: "🏢",
			title: "Fully Equipped",
			description:
				"AC, ergonomic chairs, meeting rooms, and all essential office amenities.",
		},
		{
			icon: "🤝",
			title: "Community & Networking",
			description:
				"Collaborate with entrepreneurs, freelancers, and remote workers.",
		},
	];

	const [expanded, setExpanded] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setExpanded(!expanded);

		// Scroll up to the section when collapsing
		if (expanded && sectionRef.current) {
			setTimeout(() => {
				sectionRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 300);
		}
	};

	return (
		<section
			ref={sectionRef}
			className="py-16 text-center bg-cover bg-center bg-no-repeat relative"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741419739/plain-yellow-background-sz8rral13llcyqn8_abhjsu.png')",
			}}>
			<div className="relative max-w-6xl mx-auto px-6 text-gray-800">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl font-bold">
					Why Choose Us?
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-2 text-lg">
					Discover the benefits of working in a shared workspace.
				</motion.p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{features
							.slice(0, expanded ? features.length : 3)
							.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ duration: 0.4 }}
									className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-gray-800">
									<div className="text-5xl">{feature.icon}</div>
									<h3 className="mt-4 text-2xl font-semibold">
										{feature.title}
									</h3>
									<p className="text-gray-600 mt-2">{feature.description}</p>
								</motion.div>
							))}
					</AnimatePresence>
				</div>

				<motion.button
					onClick={handleToggle}
					whileTap={{ scale: 0.95 }}
					className="mt-8 px-6 py-3 bg-white text-yellow-500 font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out 
               hover:bg-yellow-500 hover:text-white hover:shadow-lg">
					{expanded ? "See Less" : "See More"}
				</motion.button>
			</div>
		</section>
	);
};

export default WhyChooseUs;
