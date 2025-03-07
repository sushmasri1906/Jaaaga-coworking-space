"use client";

import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<section
			className="relative h-screen flex items-center justify-center text-center text-white"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741324130/12_Seats_Ac_2_klksqn.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundAttachment: "fixed",
			}}>
			<div className="absolute inset-0 bg-black/50"></div>

			<div className="relative z-10 max-w-3xl px-6 bg-white/10 backdrop-blur-md rounded-xl p-10 shadow-lg">
				<h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
					Welcome to{" "}
					<span className="text-yellow-500">Jaaaga Coworking Space</span>
				</h1>
				<p className="mt-4 text-lg md:text-xl font-medium text-gray-200">
					A premium coworking space designed for freelancers, startups, and
					businesses to thrive.
				</p>

				<div className="mt-6 flex justify-center space-x-4">
					<Link href="/contact">
						<button className="bg-yellow-500 text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-all shadow-md">
							Contact Us
						</button>
					</Link>
					<Link href="/contact">
						<button className="border border-yellow-500 px-6 py-3 rounded-lg text-lg font-semibold text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all shadow-md">
							Location
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
