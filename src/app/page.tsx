import Features from "@/components/WhyChooseUs";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Workspaces from "@/components/Workspaces";
import React from "react";
import Contact from "@/components/Contact";

function page() {
	return (
		<div className="mt-10">
			<Hero />
			<Features />

			<Workspaces />
			<Testimonials />
			<Contact />
		</div>
	);
}

export default page;
