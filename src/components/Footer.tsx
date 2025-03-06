import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10">
			<div className="max-w-6xl mx-auto px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* About Section */}
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Jaaaga Coworking Space
						</h3>
						<p className="text-gray-400 mt-3 text-sm">
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

					{/* Contact Section */}
					<div>
						<h3 className="text-xl font-semibold text-yellow-400">
							Get in Touch
						</h3>
						<p className="text-gray-400 mt-3 text-sm">📍 Ameerpet, Hyderabad</p>
						<p className="text-gray-400 text-sm">
							📧 officetoletinfo@gmail.com
						</p>
						<p className="text-gray-400 text-sm">📞 +91 98765 43210</p>
					</div>
				</div>

				{/* Social Media & Copyright */}
				<div className="border-t border-gray-700 mt-8 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
					<p>
						© {new Date().getFullYear()} Jaaaga Coworking space. All Rights
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
