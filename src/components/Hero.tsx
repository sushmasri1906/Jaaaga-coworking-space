"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<section
			className="relative bg-cover bg-center h-screen flex items-center justify-center text-center text-white opacity-90"
			style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
			<div className="relative z-10 max-w-3xl px-6 bg-white/5 backdrop-blur-sm rounded-lg p-8">
				<h1 className="text-4xl md:text-6xl font-bold text-gray-900">
					Welcome to <span className="text-yellow-500">Jaaaga Coworking</span>
				</h1>
				<p className="mt-4 text-xl font-semibold md:text-xl text-white">
					A premium coworking space designed for freelancers, startups, and
					businesses to thrive.
				</p>

				<div className="mt-6 flex justify-center space-x-4">
					<Link href="/contact">
						<button className="bg-yellow-500 text-black px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-600 transition">
							Contact Us
						</button>
					</Link>
					<Link href="/contact">
						<button className="border border-yellow-500 px-6 py-3 rounded-md text-lg font-medium hover:bg-yellow-500 hover:text-black transition">
							Location
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
