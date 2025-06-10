import { sanityClient } from "../../../lib/sanity";
import { getAllWorkspacesQuery } from "../../../lib/queries";
import WorkspaceCard from "../../components/workspace/WorkspaceCard";

interface Workspace {
	_id: string;
	name: string;
	slug: string;
	description?: string | null;
	type: string;
	pricePerDay: number;
	pricePerMonth?: number;
	image?: string | null;
	available: boolean;
}

export const revalidate = 60;

export default async function WorkspacesPage() {
	const workspaces: Workspace[] = await sanityClient.fetch(
		getAllWorkspacesQuery
	);

	return (
		<div className=" mx-auto px-8 py-12 mt-16 bg-white">
			<h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
				All Workspaces
			</h1>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
				{workspaces.map((ws) => (
					<WorkspaceCard key={ws._id} {...ws} />
				))}
			</div>
		</div>
	);
}
