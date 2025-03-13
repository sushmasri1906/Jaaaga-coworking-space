import Features from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Workspaces from "@/components/Workspaces";
import React from "react";
import Contact from "@/components/Contact";
import SingleDesk from "@/components/Singledesk";

function page() {
	return (
		<>
			<Hero />
			<Features />
			<SingleDesk />
			<Workspaces />

			<Testimonials />
			<Contact />
		</>
	);
}

export default page;
