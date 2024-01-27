import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  products: Product[];
  addProduct: (product: Product) => void;
};

type Action = {
  addProduct: (products: Product) => void;
};

export const useCartStore = create<CartState & Action>((set) => ({
  products: [],
  addProduct: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
}));
