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
