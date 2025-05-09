import Link from "next/link";
import Image from "next/image";

interface WorkspaceCardProps {
	name: string;
	slug: string;
	description?: string | null;
	type: string;
	pricePerDay: number;
	pricePerMonth?: number;
	image?: string | null;
	available: boolean;
}

export default function WorkspaceCard(props: WorkspaceCardProps) {
	const {
		name,
		slug,
		description,
		type,
		pricePerDay,
		pricePerMonth,
		image,
		available,
	} = props;

	const safeDescription = (description ?? "No description available").slice(
		0,
		100
	);

	return (
		<div className="bg-white shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl max-w-sm mx-auto">
			<Image
				src={image || "/placeholder.jpg"}
				alt={name}
				width={800}
				height={400}
				className="w-full h-56 object-cover"
			/>

			<div className="p-6">
				<h2 className="text-2xl font-semibold text-gray-900 hover:text-indigo-700 hover:underline transition-colors duration-200">
					<Link href={`/workspaces/${slug}`}>{name}</Link>
				</h2>
				<div className="mt-3 flex items-center justify-center bg-gray-200 rounded-lg p-2">
					<p className="text-sm font-medium text-gray-800 mr-2">Type:</p>
					<p className="text-sm text-indigo-600">{type}</p>
				</div>

				<p className="text-gray-700 mt-3 text-center">{safeDescription}...</p>

				<div className="mt-4 bg-gray-200 p-6 rounded-xl shadow-md">
					<p className="text-sm text-gray-600">Price:</p>

					<div className="text-lg font-semibold text-indigo-800 mb-2">
						<span className="text-xl text-indigo-600">₹{pricePerDay}</span>/day
					</div>

					{pricePerMonth && (
						<div className="text-sm text-gray-500">
							<span className="text-base text-indigo-600">
								₹{pricePerMonth}
							</span>
							/month
						</div>
					)}
				</div>

				<p
					className={`mt-3 text-sm font-medium ${available ? "text-green-600" : "text-red-600"}`}>
					{available ? "Available" : "Not Available"}
				</p>
			</div>

			<div className="bg-gray-50 py-3 px-6 text-center">
				<Link
					href={`/workspaces/${slug}`}
					className="inline-block py-2 px-4 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition duration-200">
					View Details
				</Link>
			</div>
		</div>
	);
}
