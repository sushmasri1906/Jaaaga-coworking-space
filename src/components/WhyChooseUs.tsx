"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WhyChooseUs = () => {
	const features = [
		{
			icon: "📍",
			title: "Prime Location",
			description:
				"Easily accessible in Hyderabad, near cafes and transport hubs.",
		},
		{
			icon: "💰",
			title: "Affordable Pricing",
			description: "Flexible plans for freelancers and startups.",
		},
		{
			icon: "📶",
			title: "High-Speed Internet",
			description: "Reliable WiFi for smooth video calls.",
		},
		{
			icon: "⏰",
			title: "24/7 Access",
			description: "Work anytime with round-the-clock access.",
		},
		{
			icon: "🏢",
			title: "Fully Equipped",
			description: "AC, ergonomic chairs, and office essentials.",
		},
		{
			icon: "🤝",
			title: "Community & Networking",
			description: "Connect with entrepreneurs and remote workers.",
		},
	];

	const [expanded, setExpanded] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	const handleToggle = () => {
		setExpanded(!expanded);
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
		<section ref={sectionRef} className="py-12 text-center bg-yellow-400">
			<div className="relative max-w-5xl mx-auto px-4 text-gray-900">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-3xl font-bold">
					Why Choose Us?
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="mt-1 text-base">
					Discover the benefits of our coworking space.
				</motion.p>

				<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
									className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-lg text-gray-800">
									<div className="text-4xl">{feature.icon}</div>
									<h3 className="mt-3 text-xl font-semibold">
										{feature.title}
									</h3>
									<p className="text-gray-700 mt-1 text-sm text-center">
										{feature.description}
									</p>
								</motion.div>
							))}
					</AnimatePresence>
				</div>

				<motion.button
					onClick={handleToggle}
					whileTap={{ scale: 0.95 }}
					className="mt-6 px-5 py-2.5 bg-white text-yellow-500 font-medium rounded-md shadow-md transition-all duration-300 ease-in-out 
               hover:bg-yellow-500 hover:text-white hover:shadow-lg text-sm">
					{expanded ? "See Less" : "See More"}
				</motion.button>
			</div>
		</section>
	);
};

export default WhyChooseUs;
