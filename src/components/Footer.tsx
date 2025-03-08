import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white pt-11 relative mt-20">
			{/* CTA Box */}
			<div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-3xl bg-yellow-400 text-center py-6 rounded-2xl shadow-xl px-6 md:px-12">
				<h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
					Ready to Elevate Your Work at{" "}
					<span className="text-white">Jaaaga Coworking Space?</span>
				</h2>

				<Link href="/contact">
					<button className="bg-white text-gray-900 font-semibold py-3 px-6 rounded-full shadow-md transition duration-300 hover:bg-gray-200">
						Join Now
					</button>
				</Link>
			</div>

			<div className="container mx-auto px-6 sm:px-8 md:px-12 mt-28">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
					{/* About Section */}
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Jaaaga Coworking Space
						</h3>
						<p className="text-gray-400 mt-2 text-sm leading-relaxed">
							A premium coworking space in Hyderabad designed for startups,
							freelancers, and professionals.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Quick Links
						</h3>
						<ul className="mt-3 space-y-2 text-gray-400 text-sm">
							{["About Us", "Location", "Workspace", "Contact Us"].map(
								(item, index) => (
									<li key={index}>
										<Link
											href={`/${item.toLowerCase().replace(" ", "")}`}
											className="hover:text-yellow-400 transition">
											{item}
										</Link>
									</li>
								)
							)}
						</ul>
					</div>

					{/* Contact Details */}
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Get in Touch
						</h3>
						<p className="text-gray-400 mt-3 text-sm">📍 Ameerpet, Hyderabad</p>
						<p className="text-gray-400 text-sm">
							✉️{" "}
							<Link
								href="mailto:officetoletinfo@gmail.com"
								className="text-yellow-400 hover:underline">
								officetoletinfo@gmail.com
							</Link>
						</p>
						<p className="text-gray-400 text-sm flex items-center">
							📞{" "}
							<Link
								href="tel:+919160666681"
								className="text-yellow-400 hover:underline ml-1">
								+91 9160666681
							</Link>
							<span className="ml-2 text-gray-400">| Manager: John Doe</span>
						</p>
					</div>
				</div>

				{/* Footer Bottom */}
				<div className="border-t border-gray-700 mt-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
					<p>
						&copy; {new Date().getFullYear()} Jaaaga Coworking Space. All Rights
						Reserved.
					</p>
					<div className="flex space-x-6 mt-3 md:mt-0">
						{["Facebook", "Twitter", "LinkedIn", "Instagram"].map(
							(platform, index) => (
								<Link
									key={index}
									href="#"
									className="hover:text-yellow-400 transition">
									{platform}
								</Link>
							)
						)}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
