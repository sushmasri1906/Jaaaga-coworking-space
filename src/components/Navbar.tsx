"use client";

import Link from "next/link";
import { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaHome,
	FaUsers,
	FaBuilding,
	FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ name: "Home", href: "/", icon: <FaHome /> },
		{ name: "About", href: "/about", icon: <FaUsers /> },
		{ name: "WorkSpaces", href: "/spaces", icon: <FaBuilding /> },

		{ name: "Contact", href: "/contact", icon: <FaEnvelope /> },
	];

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				<Link href="/">
					<span className="text-2xl font-bold text-yellow-400 cursor-pointer">
						Jaaaga <span className="text-gray-800">Coworking space</span>
					</span>
				</Link>

				<div className="hidden md:flex space-x-6 items-center">
					{menuItems.map(({ name, href, icon }) => (
						<Link
							key={name}
							href={href}
							className="flex items-center space-x-2 text-gray-700 hover:text-yellow-500">
							{icon} <span>{name}</span>
						</Link>
					))}
				</div>

				<button
					className="md:hidden text-yellow-500"
					onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden bg-white shadow-md absolute w-full left-0 top-16 py-4">
					{menuItems.map(({ name, href, icon }) => (
						<Link
							key={name}
							href={href}
							className="flex items-center px-6 py-3 text-gray-700 hover:text-yellow-500">
							{icon} <span className="ml-2">{name}</span>
						</Link>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
