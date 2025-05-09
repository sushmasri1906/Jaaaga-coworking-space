// lib/types.ts

export interface GalleryImage {
    _key: string;
    asset: {
      url: string | undefined;
      _ref: string;
      _type: 'reference';
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
  