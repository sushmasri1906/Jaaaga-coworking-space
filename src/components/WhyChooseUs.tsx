const WhyChooseUs = () => {
	const features = [
		{
			icon: "📍",
			title: "Prime Location",
			description:
				"Easily accessible in the heart of Hyderabad, surrounded by cafes and transport hubs.",
		},
		{
			icon: "💰",
			title: "Affordable Pricing",
			description:
				"Cost-effective coworking space with flexible plans for freelancers and startups.",
		},
		{
			icon: "📶",
			title: "High-Speed Internet",
			description:
				"Reliable WiFi ensures uninterrupted work and smooth video calls.",
		},
		{
			icon: "⏰",
			title: "24/7 Access",
			description:
				"Work at any time that suits your schedule, with round-the-clock access.",
		},
		{
			icon: "🏢",
			title: "Fully Equipped",
			description:
				"AC, ergonomic chairs, meeting rooms, and all essential office amenities.",
		},
		{
			icon: "🤝",
			title: "Community & Networking",
			description:
				"Collaborate with entrepreneurs, freelancers, and remote workers.",
		},
	];

	return (
		<section className="py-16 text-center">
			<div className="max-w-6xl mx-auto px-6">
				<h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
				<p className="text-yellow-500 mt-2 text-lg">
					Discover the benefits of working in a shared workspace.
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
							<div className="text-5xl">{feature.icon}</div>
							<h3 className="mt-4 text-2xl font-semibold text-gray-800">
								{feature.title}
							</h3>
							<p className="text-gray-600 mt-2">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
