import { FaUserCircle } from "react-icons/fa";

const testimonials = [
	{
		name: "Purushotham Rudraraju",
		review:
			"The most comfortable coworking space ideally located in the coaching hub of Hyderabad at Ameerpet SR Nagar. Easy accessible workspaces with all amenities and available at an affordable cost to Freelancers, Startups and Entrepreneurs.",
	},
	{
		name: "Kalesha Shaik",
		review:
			"Best co-working space in Hyderabad! Excellent service provider in shared offices, very reasonable price compared to others.",
	},
	{
		name: "Sachin Samad",
		review: "Please share your contact information.",
	},
];

const Testimonials = () => {
	return (
		<section className="py-16 bg-gray-50 text-center">
			<h2 className="text-3xl font-bold text-gray-800">What Our Members Say</h2>
			<p className="text-yellow-400 mt-2">Reviews from happy members</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
						<FaUserCircle className="text-gray-400 text-6xl" />
						<h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>

						<p className="text-gray-600 mt-2 italic">
							{testimonial.review
								.replace(/"/g, "&quot;")
								.replace(/'/g, "&#39;")}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
