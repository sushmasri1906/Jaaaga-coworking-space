import Link from "next/link";
import Image from "next/image";

interface WorkspaceCardProps {
	name: string;
	slug: string;
	image?: string | null;
}

export default function WorkspaceCard({
	name,
	slug,
	image,
}: WorkspaceCardProps) {
	return (
		<div className="w-full sm:w-[500px] h-[500px] bg-white rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-105 overflow-hidden mx-auto flex flex-col">
			<div className="flex-shrink-0">
				<Link href={`/workspaces/${slug}`}>
					<div className="cursor-pointer">
						<Image
							src={image || "/placeholder.jpg"}
							alt={name}
							width={500}
							height={400}
							className="w-full h-[300px] object-cover mt-4"
						/>
						<div className="p-5 text-center">
							<h2 className="text-2xl font-semibold text-gray-900 hover:text-red-600 transition-colors line-clamp-2">
								{name}
							</h2>
						</div>
					</div>
				</Link>
				<div className="p-5 pt-0 text-center mt-auto">
					<Link
						href={`/workspaces/${slug}`}
						className="inline-block bg-red-600 text-white py-2 px-6 rounded-lg text-sm font-medium hover:bg-red-700 transition">
						View Details
					</Link>
				</div>
			</div>
		</div>
	);
}
