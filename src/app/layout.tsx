import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jaaaga Coworking Space",
	description:
		"Jaaaga Coworking Space is a premium shared office space designed for freelancers, startups, and remote workers. Located in a prime area, we offer high-speed WiFi, flexible desk options, private cabins, meeting rooms, and a vibrant community of innovators. Enjoy 24/7 access, networking opportunities, and a productive environment tailored for growth. Book your coworking space today!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<div className=" pt-5">
					<Navbar />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	);
}
