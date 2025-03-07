import { FaUserCircle, FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
	{
		name: "Kadavandah Harish",
		review:
			"A good workspace with excellent service provided by the team management.",
		rating: 5,
	},
	{
		name: "Nikhil Landeri",
		review:
			"Nice co-working space with all the facilities at low cost. The owner is very humble and polite.",
		rating: 4,
	},
	{
		name: "Ravi Govada",
		review:
			"This is an economic space for startups. We found good management, maintenance, and security.",
		rating: 5,
	},
	{
		name: "Hari 100",
		review:
			"Best place to have an office-like workspace, with a homely nature and peaceful environment.",
		rating: 4,
	},
	{
		name: "Phanikumar Uddanti",
		review:
			"Nice environment. Near to Main Road. Good support from the owner. Low-cost seats available.",
		rating: 5,
	},
];

const renderStars = (rating: number) => {
	return (
		<div className="flex mt-2">
			{[...Array(5)].map((_, index) =>
				index < rating ? (
					<FaStar key={index} className="text-yellow-500 text-lg" />
				) : (
					<FaRegStar key={index} className="text-gray-300 text-lg" />
				)
			)}
		</div>
	);
};

const Testimonials = () => {
	return (
		<section className="py-16 bg-gray-50 text-center">
			<h2 className="text-3xl font-bold text-gray-800">What Our Members Say</h2>
			<p className="text-gray-800 mt-2">Reviews from happy members</p>

			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
						<FaUserCircle className="text-gray-400 text-6xl" />
						<h3 className="mt-4 text-lg font-semibold">{testimonial.name}</h3>
						{renderStars(testimonial.rating)}
						<p className="text-gray-600 mt-2 italic">{testimonial.review}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
