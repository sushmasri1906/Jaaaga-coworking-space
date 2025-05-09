"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Support Services", href: "/services" },
		{ name: "Contact", href: "/contact" },
		{ name: "Gallery", href: "/gallery" },
	];

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.9 }}
			className="bg-white fixed w-full top-0 z-50 shadow-md">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				<Link href="/">
					<span className="text-2xl font-bold text-red-600 cursor-pointer">
						Jaaaga <span className="text-black">Coworking Space</span>
					</span>
				</Link>

				<div className="hidden md:flex space-x-6 items-center">
					{menuItems.map(({ name, href }) => (
						<motion.div
							key={name}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}>
							<Link
								href={href}
								className="text-black hover:text-yellow-400 transition duration-300">
								{name}
							</Link>
						</motion.div>
					))}
				</div>

				<motion.button
					className="md:hidden text-yellow-400"
					onClick={() => setIsOpen(!isOpen)}
					whileTap={{ scale: 0.8 }}>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</motion.button>
			</div>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-white shadow-lg absolute w-full left-0 top-16 py-4 z-50">
						{menuItems.map(({ name, href }) => (
							<motion.div
								key={name}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}>
								<Link
									href={href}
									className="block px-6 py-3 text-black hover:text-yellow-400 transition duration-300">
									{name}
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
};

export default Navbar;
