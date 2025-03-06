"use client";

import { useState } from "react";
import Image from "next/image";

const Workspaces = () => {
	const [showAll, setShowAll] = useState(false);

	const workspaces = [
		{
			name: "Private Workspace",
			description: "8 seats workspace with AC & MD Cabin.",
			price: "₹28,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "12 Seats Workspace",
			description: "Spacious & comfortable 12-seat coworking area.",
			price: "₹36,000.00",
			image: "/hero-bg.jpg",
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
			image: "/hero-bg.jpg",
		},
		{
			name: "7 Seats Workspace",
			description: "AC workspace with MD Cabin for 7 people.",
			price: "₹35,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "Manager Cabin AC",
			description: "Private AC cabin for managers.",
			price: "₹12,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "Diwali Offer",
			description: "Limited-time festive offer!",
			price: "₹3,999.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "12 Seat Soundproof Workspace",
			description: "Noise-free coworking space for 12 people.",
			price: "₹30,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "8 Seat Soundproof Workspace",
			description: "Acoustically treated space for focus & productivity.",
			price: "₹24,000.00",
			image: "/hero-bg.jpg",
		},
		{
			name: "5 Seats Non-AC Workspace",
			description: "Budget-friendly workspace for 5 people.",
			price: "₹15,000.00",
			image: "/hero-bg.jpg",
		},
	];

	// Show only 6 workspaces initially
	const visibleWorkspaces = showAll ? workspaces : workspaces.slice(0, 6);

	return (
		<section className="py-16 bg-white text-center">
			<h2 className="text-3xl font-bold text-gray-800">Available Workspaces</h2>
			<p className="text-gray-600 mt-2">
				Choose the perfect workspace for your needs
			</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
				{visibleWorkspaces.map((workspace, index) => (
					<div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
						<Image
							src={workspace.image}
							alt={workspace.name}
							className="w-full h-40 object-cover rounded-md"
							width={500}
							height={300}
						/>
						<h3 className="mt-4 text-xl font-semibold">{workspace.name}</h3>
						<p className="text-gray-600 mt-2">{workspace.description}</p>
						<p className="text-yellow-500 font-bold mt-2">{workspace.price}</p>
					</div>
				))}
			</div>

			{/* "See More" Button */}
			<div className="mt-8">
				<button
					onClick={() => setShowAll(!showAll)}
					className="bg-yellow-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition">
					{showAll ? "See Less" : "See More"}
				</button>
			</div>
		</section>
	);
};

export default Workspaces;
