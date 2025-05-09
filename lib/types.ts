// lib/types.ts

export interface GalleryImage {
	_key: string;
	asset: {
		url: string | undefined;
		_ref: string;
		_type: "reference";
	};
	alt?: string;
}

export interface Gallery {
	_id: string;
	_createdAt: string;
	name: string;
	slug: {
		current: string;
	};
	photos: GalleryImage[];
}

// types.ts

export interface Workspace {
	_id: string;
	_createdAt: string;
	name: string;
	slug: {
		current: string;
	};
	description: string;
	type: "Open Desk" | "Private Cabin" | "Meeting Room";
	pricePerDay: number;
	pricePerMonth: number;
	contactNumber: string;
	image: {
		asset: {
			_ref: string;
			_type: string;
		};
	};
	available: boolean;
}

export interface WorkspaceCategory {
	_id: string;
	_createdAt: string;
	name: string;
	slug: {
		current: string;
	};
}
