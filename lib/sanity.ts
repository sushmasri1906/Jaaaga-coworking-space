// lib/sanity.ts

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
	projectId: "s3evhx55",
	dataset: "production",
	useCdn: true,
	apiVersion: "2024-05-01",
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: unknown) =>
	builder.image(source as { _type: string });
