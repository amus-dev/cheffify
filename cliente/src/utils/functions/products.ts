import { PRODUCTS } from "@config/database.products";

interface RandomArrayType<T> {
  arr: Array<T>;
  totalItems: number;
}

export const randomArray = <T>({
  arr,
  totalItems,
}: RandomArrayType<T>): Array<T> => {
  const result = arr.sort(() => Math.random() - 0.5).slice(0, totalItems);
  return result;
};

export const formatPriceCLP = (price: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);
};

export const filterProductBySlug = (slug: string) => {
  const productFilter = PRODUCTS.filter((product) => product.slug === slug);
  return productFilter[0];
};
