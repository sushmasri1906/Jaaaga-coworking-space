import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10 relative">
			{/* CTA Box - Positioned on Footer */}
			<div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-yellow-400 text-white text-center py-8 rounded-2xl shadow-lg px-6 md:px-12">
				<h2 className="text-2xl md:text-3xl font-bold mb-4">
					Would you like to join <span className="text-white">Hello-Bizz?</span>
				</h2>
				<Link href="/join">
					<button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-200">
						CLICK HERE NOW
					</button>
				</Link>
			</div>

			<div className="max-w-6xl mx-auto px-6 mt-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Jaaaga Coworking Space
						</h3>
						<p className="text-gray-400 mt-3 text-sm">
							A premium coworking space in Hyderabad designed for startups,
							freelancers, and professionals.
						</p>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2 text-gray-400 text-sm">
							<li>
								<Link
									href="/about"
									className="hover:text-yellow-400 transition">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-yellow-400 transition">
									Location
								</Link>
							</li>
							<li>
								<Link
									href="/spaces"
									className="hover:text-yellow-400 transition">
									Workspace
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="hover:text-yellow-400 transition">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Get in Touch
						</h3>
						<p className="text-gray-400 mt-3 text-sm">
							&#x1F4CD; Ameerpet, Hyderabad
						</p>
						<p className="text-gray-400 text-sm">
							&#x1F4E7; officetoletinfo@gmail.com
						</p>
						<p className="text-gray-400 text-sm">&#x260E; +91 9160666681</p>
					</div>
				</div>

				<div className="border-t border-gray-700 mt-8 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} Jaaaga Coworking Space. All Rights
						Reserved.
					</p>
					<div className="flex space-x-4 mt-3 md:mt-0">
						<Link href="#" className="hover:text-yellow-400 transition">
							Facebook
						</Link>
						<Link href="#" className="hover:text-yellow-400 transition">
							Twitter
						</Link>
						<Link href="#" className="hover:text-yellow-400 transition">
							LinkedIn
						</Link>
						<Link href="#" className="hover:text-yellow-400 transition">
							Instagram
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
