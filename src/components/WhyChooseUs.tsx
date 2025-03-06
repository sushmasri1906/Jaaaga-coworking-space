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
		<section className="py-16 bg-gray-100 text-center">
			<h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
			<p className="text-yellow-400 mt-2">
				Discover the benefits of working in a shared workspace.
			</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
						<div className="text-4xl">{feature.icon}</div>
						<h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
						<p className="text-gray-600 mt-2">{feature.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyChooseUs;
