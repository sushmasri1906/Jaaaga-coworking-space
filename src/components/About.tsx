import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<section className="py-16 bg-white text-gray-900">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-center text-yellow-400">
					About Jaaaga Coworking Space
				</h2>
				<p className="text-center text-lg mt-3 text-gray-700">
					A vibrant coworking space in Hyderabad designed for professionals,
					startups, and freelancers, offering world-class amenities and a
					collaborative environment.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
					{/* Left Side - Description */}
					<div className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
						<h3 className="text-2xl font-semibold text-gray-900">
							Why Choose Us?
						</h3>
						<p className="text-gray-700 mt-3 leading-relaxed">
							Jaaaga Coworking Space provides a{" "}
							<strong>comfortable, productive, and inspiring</strong> work
							environment. Whether you&apos;re a startup, an entrepreneur, or a
							freelancer, our space is built to foster{" "}
							<strong>creativity, collaboration, and networking</strong>.
						</p>
						<ul className="mt-4 space-y-3 text-gray-700">
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-2">✔</span>
								<strong>Separate Washroom & Water Facilities</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-2">✔</span>
								<strong>24/7 Security & Power Backup</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-2">✔</span>
								<strong>Flexible Office Space & Rent Plans</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-2">✔</span>
								<strong>Ideal for Startups, Workshops, and Training</strong>
							</li>
						</ul>
					</div>

					{/* Right Side - Key Features */}
					<div className="bg-gray-100 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400">
						<h3 className="text-2xl font-semibold text-gray-900">
							Our Community
						</h3>
						<p className="text-gray-700 mt-3 leading-relaxed">
							We believe in{" "}
							<strong>collaboration, innovation, and growth</strong>. Our
							coworking space connects{" "}
							<strong>freelancers, startups, and businesses</strong> to foster a
							thriving professional ecosystem.
						</p>
						<p className="mt-4 text-gray-700">
							Whether you need a{" "}
							<strong>
								dedicated desk, a meeting room, or a private office
							</strong>
							, we have the perfect space for you.
						</p>
					</div>
				</div>

				{/* Call to Action */}
				<div className="text-center mt-10">
					<Link
						href="#contact"
						className="bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
						Get in Touch
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
