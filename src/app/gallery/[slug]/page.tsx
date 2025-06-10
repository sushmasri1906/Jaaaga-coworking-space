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

	const gallery: Gallery = await sanityClient.fetch(galleryBySlugQuery, {
		slug,
	});

	return (
		<div className="p-6 mt-15">
			<h1 className="text-3xl font-bold mb-6">{gallery.name}</h1>

			<div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
				{gallery.photos.map((photo) => (
					<div
						key={photo._key}
						className="break-inside-avoid overflow-hidden rounded-lg shadow">
						<Image
							src={urlFor(photo).url()}
							alt={photo.alt || gallery.name}
							width={800} // Large enough default for responsive quality
							height={600}
							sizes="(max-width: 768px) 100vw, 33vw"
							className="w-full h-auto object-cover rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
						/>
					</div>
				))}
			</div>
		</div>
	);
}
