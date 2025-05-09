

import { sanityClient } from "../../../lib/sanity";
import { allGalleriesQuery } from "../../../lib/queries";
import { Gallery } from "../../../lib/types";
import Link from "next/link";
import Image from "next/image"; 

export const revalidate = 60;

export default async function GalleryPage() {
	const galleries: Gallery[] = await sanityClient.fetch(allGalleriesQuery);

	return (
		<div className="p-6 mt-15">
			<h1 className="text-3xl font-bold mb-4">Galleries</h1>
			<div className="grid md:grid-cols-3 gap-6">
				{galleries.map((gallery) => (
					<Link key={gallery._id} href={`/gallery/${gallery.slug.current}`}>
						<div className="overflow-hidden shadow hover:shadow-lg transition">
							{gallery.photos[0]?.asset && (
								<Image
									src={gallery.photos[0].asset.url || "/placeholder-image.jpg"}
									alt={gallery.photos[0].alt || gallery.name}
									width={600} 
									height={300} 
									className="object-cover"
								/>
							)}
							<div className="p-4">
								<h2 className="text-xl font-semibold">{gallery.name}</h2>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
