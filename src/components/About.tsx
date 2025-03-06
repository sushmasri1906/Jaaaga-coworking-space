import React from "react";
import Link from "next/link";

const About = () => {
	return (
		<section className="py-20 bg-gray-50 text-gray-900">
			<div className="max-w-7xl mx-auto px-6 lg:px-12">
				<h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400">
					About Jaaaga Coworking Space
				</h2>
				<p className="text-center text-lg mt-4 text-gray-700 max-w-3xl mx-auto">
					A vibrant coworking space in Hyderabad designed for professionals,
					startups, and freelancers, offering world-class amenities and a
					collaborative environment.
				</p>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-2xl">
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
						<ul className="mt-5 space-y-4 text-gray-700">
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-3">✔</span>
								<strong>Separate Washroom & Water Facilities</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-3">✔</span>
								<strong>24/7 Security & Power Backup</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-3">✔</span>
								<strong>Flexible Office Space & Rent Plans</strong>
							</li>
							<li className="flex items-center">
								<span className="text-yellow-400 text-xl mr-3">✔</span>
								<strong>Ideal for Startups, Workshops, and Training</strong>
							</li>
						</ul>
					</div>

					<div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-yellow-400 transition-all duration-300 hover:shadow-2xl">
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
						<p className="mt-5 text-gray-700">
							Whether you need a{" "}
							<strong>
								dedicated desk, a meeting room, or a private office
							</strong>
							, we have the perfect space for you.
						</p>
					</div>
				</div>

				<div className="text-center mt-12">
					<Link
						href="/contact"
						className="bg-yellow-400 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
						Get in Touch
					</Link>
				</div>
			</div>
		</section>
	);
};

export default About;
