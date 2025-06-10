import { sanityClient } from "../../../../lib/sanity";
import { getWorkspaceBySlugQuery } from "../../../../lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { Key } from "react";

interface Params {
	params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
	const workspaces = await sanityClient.fetch(`
    *[_type == "workspace"]{
      "slug": slug.current
    }
  `);

	return workspaces.map((ws: { slug: string }) => ({
		slug: ws.slug,
	}));
}

export const dynamicParams = true;

export default async function WorkspaceDetailPage({ params }: Params) {
	const workspace = await sanityClient.fetch(getWorkspaceBySlugQuery, {
		slug: (await params).slug,
	});

	if (!workspace) {
		console.warn(`Workspace not found for slug: ${(await params).slug}`);
		notFound();
	}

	return (
		<div className="max-w-7xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-2xl my-16">
			{/* Header Image */}
			<div className="overflow-hidden rounded-xl shadow">
				<Image
					src={workspace.image || "/placeholder.jpg"}
					alt={workspace.name}
					width={1200}
					height={800}
					className="w-full h-[450px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
				/>
			</div>

			{/* Title & Description */}
			<div className="text-center mt-10 space-y-4">
				<h1 className="text-4xl font-extrabold text-gray-900">
					{workspace.name}
				</h1>
				<p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
					{workspace.description}
				</p>
			</div>

			{/* Info Grid */}
			<div className="flex justify-center">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-20 m-10">
					<div className="space-y-4 text-gray-800 border-gray-200 border p-6 rounded-lg shadow-md">
						<p className="text-xl">
							<span className="font-semibold">Type:</span> {workspace.type}
						</p>
						<p className="text-xl">
							<span className="font-semibold">Contact:</span>{" "}
							{workspace.contactNumber}
						</p>
					</div>

					<div className="space-y-4 text-gray-800 border-gray-200 border p-6 rounded-lg shadow-md">
						<p className="text-xl">
							<span className="font-semibold">Price/Day:</span> ₹
							{workspace.pricePerDay}
						</p>
						{workspace.pricePerMonth && (
							<p className="text-xl">
								<span className="font-semibold">Price/Month:</span> ₹
								{workspace.pricePerMonth}
							</p>
						)}
						<p
							className={`text-xl font-medium ${
								workspace.available ? "text-green-600" : "text-red-600"
							}`}>
							<span className="font-semibold">Status:</span>{" "}
							{workspace.available ? "Available" : "Not Available"}
						</p>
					</div>
				</div>
			</div>

			{/* Call to Book */}
			<div className="mt-10 text-center">
				<a
					href={`tel:${workspace.contactNumber}`}
					className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
					Call to Book
				</a>
			</div>

			{/* Gallery Section */}
			{workspace.gallery?.photos?.length > 0 && (
				<div className="mt-16">
					<h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
						Workspace Gallery
					</h2>
					<div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
						{workspace.gallery.photos.map((photo: { _key: Key | null | undefined; asset: { url: string | StaticImport; }; alt: string | undefined; }) => (
							<div
								key={photo._key}
								className="overflow-hidden rounded-lg shadow-md break-inside-avoid">
								<Image
									src={photo.asset.url}
									alt={photo.alt || workspace.name}
									width={800}
									height={600}
									sizes="(max-width: 768px) 100vw, 33vw"
									className="w-full h-auto object-cover rounded-md transition-transform duration-300 hover:scale-105"
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
