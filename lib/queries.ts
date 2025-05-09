// lib/queries.ts

export const allGalleriesQuery = `
*[_type == "gallery"]{
  _id,
  _createdAt,
  name,
  slug,
  photos[]{
    _key,
    alt,
    asset->{
      _id,
      url
    }
  }
} | order(_createdAt desc)
`;

export const galleryBySlugQuery = `
*[_type == "gallery" && slug.current == $slug][0]{
  _id,
  _createdAt,
  name,
  slug,
  photos[]{
    _key,
    alt,
    asset->{
      _id,
      url
    }
  }
}
`;

// queries.ts

// lib/queries.ts
export const getAllWorkspacesQuery = `
  *[_type == "workspace"] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    description,
    type,
    pricePerDay,
    pricePerMonth,
    contactNumber,
    available,
    "image": image.asset->url
  }
`;

export const getAllWorkspaceCategoriesQuery = `
  *[_type == "workspaceCategory"] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    "slug": slug.current
  }
`;
export const getWorkspaceBySlugQuery = `
  *[_type == "workspace" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    description,
    type,
    pricePerDay,
    pricePerMonth,
    contactNumber,
    available,
    "image": image.asset->url
  }
`;
