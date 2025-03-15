"use client";

import { motion } from "framer-motion";
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
	{
		name: "Purushotham Rudraraju",
		review:
			"The most comfortable coworking space ideally located in the coaching hub of Hyderabad at Ameerpet SR Nagar. Easy accessible workspaces with all amenities and available at an affordable cost to freelancers, startups, and entrepreneurs. Jaaaga's productive atmosphere and supportive community make it a top coworking space in Ameerpet.",
		rating: 5,
	},
	{
		name: "Kalesha Shaik",
		review:
			"Best co-working space in Hyderabad. Excellent service provider in shared office, very reasonable price compared to others. Vastu is super, cleaning, and other maintenance is awesome.",
		rating: 5,
	},
	{
		name: 'Cm Srinivas "Film Director"',
		review:
			"Best location, good office setup, and reasonable office rent. I am satisfied with jaaaga.com. Thank you Swami Garu.",
		rating: 4,
	},
	{
		name: "Partha Sarathy",
		review:
			"Good co-working space in Ameerpet. Maintenance is superb 👌 reasonable price 👏",
		rating: 4,
	},
	{
		name: "Anjali 3446",
		review:
			"It's good for my work. Work culture is very good. Nice ambience. It's budget-friendly. It's awesome in Ameerpet.",
		rating: 5,
	},
	{
		name: "Rakesh Shabad",
		review:
			"Great place for plug and play. Comfortable sitting. Environment is also good.",
		rating: 4,
	},
	{
		name: "Srinivas Nalamala",
		review:
			"A good workspace for the office environment with all facilities for low cost.",
		rating: 4,
	},
	{
		name: "Ajay Sadhuneni",
		review: "A well-maintained coworking space with all necessary amenities.",
		rating: 4,
	},
	{
		name: "Happycoin HC",
		review:
			"All the services provided are quite good, with no issues related to water and excellent cleaning service.",
		rating: 5,
	},
	{
		name: "Signitainment",
		review:
			"Nice place for freelancers and entrepreneurs. Affordable and functional workstations for growing companies and startups.",
		rating: 5,
	},
	{
		name: "VIZNIYOG",
		review:
			"A great and affordable place to work in Ameerpet, Hyderabad. Nice interior and good service, especially the owner is good.",
		rating: 5,
	},
	{
		name: "Amajalapu Gangadhara Rao",
		review: "Excellent co-working space and reasonable price.",
		rating: 5,
	},
	{
		name: "Manohar Dani",
		review:
			"Comfortable environment. Good choice for individuals and startups.",
		rating: 4,
	},
	{
		name: "Shaik Karimulla",
		review: "Crazy place to work. I recommend it, peaceful place and good.",
		rating: 5,
	},
	{
		name: "Syed Muneer Uddin",
		review:
			"A good workspace and excellent service provided by the team management.",
		rating: 4,
	},
	{
		name: "Joseph Alex",
		review: "Decent space to work and happy people around.",
		rating: 4,
	},
	{
		name: "Daya Reddy",
		review:
			"Good location to work, workstations are very good and comfortable. Maintenance is excellent.",
		rating: 5,
	},
	{
		name: "Prem Sagar",
		review:
			"Co-working spaces are the best present alternative for dedicated office spaces like this.",
		rating: 4,
	},
	{
		name: "Digamber G. Immunis IP",
		review:
			"Best place to work with great reception and all facilities. I highly recommend it.",
		rating: 5,
	},
	{
		name: "Rakshith Roop",
		review: "Good office, good co-working space, reasonable price.",
		rating: 4,
	},
	{
		name: "Jupiter Vincent",
		review: "Nice co-working place in Ameerpet and responsible management.",
		rating: 5,
	},
	{
		name: "Ravi Krishna",
		review: "I like this place. Very supporting staff.",
		rating: 4,
	},
	{
		name: "Balina Sairam (cc)",
		review:
			"It's a place of opportunities. I strongly recommend to give a try.",
		rating: 5,
	},
	{
		name: "Rakesh Dhannayak",
		review: "We required quantity tea, morning and evening.",
		rating: 3,
	},
	{
		name: "Ramakrishna Bairi",
		review: "Best place for startup companies.",
		rating: 5,
	},
	{
		name: "Happy Coin",
		review: "Good owner with all facilities.",
		rating: 5,
	},
	{
		name: "Venkatesh Yadav",
		review: "Good atmospheric work space.",
		rating: 4,
	},
	{
		name: "Sekhar SEO",
		review: "A friendly workspace with good amenities.",
		rating: 5,
	},
	{
		name: "Sree Creative",
		review: "Excellent coworking space in Ameerpet.",
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
		<section
			className="relative py-12 text-center bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://res.cloudinary.com/dsq4uyqbb/image/upload/v1741857657/WhatsApp_Image_2025-03-13_at_14.50.15_9d945515_r33ufg.jpg')",
			}}>
			<div className="relative z-10 px-4">
				<motion.h2
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-xl font-bold text-white">
					Our Happy Clients
				</motion.h2>

				<div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.1 }}
							whileHover={{ scale: 1.02 }}
							className="bg-white p-4 rounded-md shadow-md text-left">
							<h3 className="text-sm font-semibold text-gray-800">
								{testimonial.name}
							</h3>
							{renderStars(testimonial.rating)}
							<p className="text-xs text-gray-600 mt-1">{testimonial.review}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
