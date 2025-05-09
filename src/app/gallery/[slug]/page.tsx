// app/gallery/[slug]/page.tsx

import { sanityClient, urlFor } from "../../../../lib/sanity";
import { galleryBySlugQuery } from "../../../../lib/queries";
import { Gallery } from "../../../../lib/types";
import Image from "next/image";

export const revalidate = 60;
interface GalleryPageProps {
	params: Promise<{ slug: string }>;
}

export default async function GalleryDetail({ params }: GalleryPageProps) {
	const { slug } = await params;
	console.log(slug);

	const gallery: Gallery = await sanityClient.fetch(galleryBySlugQuery, {
		slug,
	});

	return (
		<div className="p-6 mt-15">
			<h1 className="text-3xl font-bold mb-6">{gallery.name}</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 grid-flow-row-dense">
				{gallery.photos.map((photo) => (
					<div key={photo._key} className="overflow-hidden rounded-lg shadow">
						<Image
							src={urlFor(photo).width(600).url()}
							alt={photo.alt || gallery.name}
							width={600}
							height={400}
							className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
