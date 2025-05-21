export interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  username?: string;
  bio?: string;
  isDesigner: boolean;
}

export interface ModelImage {
  id: string;
  url: string;
  alt: string;
  isPrimary: boolean;
}

export interface Model {
  id: string;
  title: string;
  description: string;
  price: number;
  designer: User;
  images: ModelImage[];
  modelUrl: string;
  fileFormats: string[];
  likes: number;
  downloads: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  model: Model;
  quantity: number;
}

export interface FilterOptions {
  priceRange: [number, number];
  tags: string[];
  sortBy: 'newest' | 'popular' | 'price-asc' | 'price-desc';
}

export interface FeaturedWork {
  id: string;
  title: string;
  image: string;
  description: string;
  printerCompatibility: string[];
}

export interface Designer {
  id: string;
  name: string;
  company: string;
  image: string;
  bio: string;
  achievements: string[];
  featuredWorks: FeaturedWork[];
}