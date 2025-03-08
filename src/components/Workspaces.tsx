"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Workspaces = () => {
	const [showAll, setShowAll] = useState(false);
	const sectionRef = useRef<HTMLDivElement | null>(null);

	const workspaces = [
		{
			name: "Private Workspace",
			description: "8 seats workspace with AC & MD Cabin.",
			price: "₹28,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741324467/12_Seats_Ac_8_elk5ff.jpg",
		},
		{
			name: "12 Seats Workspace",
			description: "Spacious & comfortable 12-seat coworking area.",
			price: "₹36,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741324130/12_Seats_Ac_2_klksqn.jpg",
		},
		{
			name: "23 Seats Workspace",
			description: "Air-conditioned workspace for 23 people.",
			price: "₹69,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "30 Seats Office",
			description: "Fully equipped office space in Ameerpet.",
			price: "₹90,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325269/12_Seats_Ac_8_oyee8q.jpg",
		},
		{
			name: "7 Seats Workspace",
			description: "AC workspace with MD Cabin for 7 people.",
			price: "₹35,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325344/12_Seats_Ac_7_aa2eqj.jpg",
		},
		{
			name: "Manager Cabin AC",
			description: "Private AC cabin for managers.",
			price: "₹12,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325438/20211107_181400_dpiqgc.jpg",
		},
		{
			name: "Special Offer",
			description: "Limited-time festive offer!",
			price: "Contact us for more details",
			image: "/hero-bg.jpg",
		},
		{
			name: "12 Seat Soundproof Workspace",
			description: "Noise-free coworking space for 12 people.",
			price: "₹30,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325581/12_Seats_Ac_9_aend5e.jpg",
		},
		{
			name: "8 Seat Soundproof Workspace",
			description: "Acoustically treated space for focus & productivity.",
			price: "₹24,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325699/7_Seater_AC_with_Marker_01_g0lyze.jpg",
		},
		{
			name: "5 Seats Non-AC Workspace",
			description: "Budget-friendly workspace for 5 people.",
			price: "₹15,000.00",
			image:
				"https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741325750/5_Seats_With_Marker_Non-Ac_06_kmbtaf.jpg",
		},
	];

	const toggleShowAll = () => {
		setShowAll((prev) => {
			// If collapsing, scroll up to section
			if (prev && sectionRef.current) {
				setTimeout(() => {
					sectionRef.current?.scrollIntoView({ behavior: "smooth" });
				}, 300); // Delay to allow animation completion
			}
			return !prev;
		});
	};

	return (
		<motion.section
			ref={sectionRef}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="py-16 bg-gray-50 text-center">
			<div className="max-w-6xl mx-auto px-6">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="text-4xl font-bold text-yellow-400">
					Available Workspaces
				</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="text-gray-600 mt-2 text-lg">
					Choose the perfect workspace for your needs.
				</motion.p>

				<motion.div
					layout
					className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					<AnimatePresence>
						{(showAll ? workspaces : workspaces.slice(0, 6)).map(
							(workspace, index) => (
								<motion.div
									key={workspace.name}
									initial={{ opacity: 0, y: 20, scale: 0.9 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -20, scale: 0.9 }}
									transition={{ duration: 0.4, delay: index * 0.1 }}
									whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
									className="bg-white p-6 rounded-xl shadow-lg transform transition duration-300 hover:shadow-2xl">
									<div className="relative w-full h-48 rounded-lg overflow-hidden">
										<Image
											src={workspace.image}
											alt={workspace.name}
											layout="fill"
											objectFit="cover"
										/>
									</div>
									<h3 className="mt-4 text-2xl font-semibold text-gray-800">
										{workspace.name}
									</h3>
									<p className="text-gray-600 mt-2">{workspace.description}</p>
									<p className="text-yellow-500 font-bold text-lg mt-3">
										{workspace.price}
									</p>
								</motion.div>
							)
						)}
					</AnimatePresence>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="mt-10">
					<motion.button
						onClick={toggleShowAll}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.95 }}
						className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold rounded-lg shadow-md transition duration-300 hover:from-yellow-500 hover:to-yellow-600">
						{showAll ? "See Less" : "See More"}
					</motion.button>
				</motion.div>
			</div>
		</motion.section>
	);
};

export default Workspaces;
