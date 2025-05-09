import { sanityClient } from "../../../../lib/sanity";
import { getWorkspaceBySlugQuery } from "../../../../lib/queries";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Params {
	params: Promise<{ slug: string }>;
}

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
		<div className="max-w-5xl mx-auto px-6 py-10 my-16 bg-white rounded-xl shadow-xl">
			<Image
				src={workspace.image || "/placeholder.jpg"}
				alt={workspace.name}
				width={1200}
				height={800}
				className="w-full h-[450px] object-cover rounded-lg mb-8 shadow-lg"
			/>

			<h1 className="text-4xl font-semibold text-gray-900 mb-4 text-center">
				{workspace.name}
			</h1>

			<p className="text-lg text-gray-600 mb-8 text-center max-w-2xl mx-auto">
				{workspace.description}
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<div className="space-y-6">
					<p className="text-xl font-medium text-gray-800">
						<span className="font-semibold">Type:</span> {workspace.type}
					</p>
					<p className="text-xl font-medium text-gray-800">
						<span className="font-semibold">Contact:</span>{" "}
						{workspace.contactNumber}
					</p>
				</div>

				<div className="space-y-6">
					<p className="text-xl font-medium text-gray-800">
						<span className="font-semibold">Price/Day:</span> ₹
						{workspace.pricePerDay}
					</p>
					{workspace.pricePerMonth && (
						<p className="text-xl font-medium text-gray-800">
							<span className="font-semibold">Price/Month:</span> ₹
							{workspace.pricePerMonth}
						</p>
					)}
					<p
						className={`text-xl font-medium ${workspace.available ? "text-green-600" : "text-red-600"}`}>
						<span className="font-semibold">Status:</span>{" "}
						{workspace.available ? "Available" : "Not Available"}
					</p>
				</div>
			</div>

			<div className="mt-8 text-center">
				<a
					href={`tel:${workspace.contactNumber}`}
					className="inline-block px-8 py-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg text-lg font-medium transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
					Call to Book
				</a>
			</div>
		</div>
	);
}
