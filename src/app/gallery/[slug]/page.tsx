// app/gallery/[slug]/page.tsx

import { sanityClient, urlFor } from "../../../../lib/sanity";
import { galleryBySlugQuery } from "../../../../lib/queries";
import { Gallery } from "../../../../lib/types";
import Image from "next/image";

// Define the type for the params object
interface GalleryPageProps {
	params: { slug: string };
}

// Use an async function for fetching data in the new Next.js 13 approach
export default async function GalleryDetail({ params }: GalleryPageProps) {
	// Wrap params in a Promise (Simulating async handling of params)
	const paramsPromise = Promise.resolve(params);

	// Handle the promise for params
	const { slug } = await paramsPromise;

	// Fetch gallery data based on the slug
	const gallery: Gallery = await sanityClient.fetch(galleryBySlugQuery, {
		slug,
	});

	return (
		<div className="p-6 mt-15">
			<h1 className="text-3xl font-bold mb-6">{gallery.name}</h1>

			{/* Masonry Grid Layout */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense">
				{gallery.photos.map((photo) => (
					<div key={photo._key} className="overflow-hidden rounded-lg shadow">
						<Image
							src={urlFor(photo).width(600).url()}
							alt={photo.alt || gallery.name}
							width={600} // Provide width and height for Next.js to optimize the image
							height={400} // Adjust height based on your image aspect ratio
							className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
