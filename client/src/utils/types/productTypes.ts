export interface CardProductType {
  id: number;
  slug: string;
  image: string;
  title: string;
  description: string;
  price: number;
  alt: string;
}

export interface Product {
  id: number;
  slug: string;
  title: string;
  description: string;
  descriptionLarge: string;
  metaDescription: string;
  category: string;
  price: number;
  image: string;
  alt: string;
}

export interface ProductsStore {
  id: number;
  slug?: string;
  title: string;
  description: string;
  price: number;
  image: string;
  alt?: string;
  quantity: number;
}
