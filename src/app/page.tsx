import Features from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import React from "react";
import Contact from "@/components/Contact";
import SingleDesk from "@/components/Singledesk";
import Gallery from "@/components/Gallery";

function page() {
	return (
		<>
			<Hero />
			<Features />
			<SingleDesk />
			<Gallery />

			<Testimonials />
			<Contact />
		</>
	);
}

export default page;
