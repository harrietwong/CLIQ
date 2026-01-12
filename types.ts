export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  description: string;
  colors: ProductColor[];
  specs: Record<string, string>;
  gallery: MediaItem[]; // Global gallery
  features: Feature[];
  reviews: Review[];
  faqs: FAQ[];
}

export interface ProductColor {
  id: string;
  name: string;
  hex: string;
  gallery: MediaItem[]; // Images specific to this color variant
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
  poster?: string;
  alt: string;
}

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CartItem {
  productId: string;
  variantId: string; // color
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export type ViewState = 'HOME' | 'PRODUCT' | 'CART' | 'CHECKOUT' | 'SUCCESS';