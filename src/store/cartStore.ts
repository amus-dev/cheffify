import { create } from "zustand";

type Product = {
  id: number;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  products: Product[];
  isVisibleBag: boolean;
};

type CartActions = {
  addProduct: (products: Product) => void;
  setIsVisibleBag: (isVisible: boolean) => void;
};

export const useCartStore = create<CartState & CartActions>((set) => ({
  products: [],
  isVisibleBag: false,
  addProduct: (product: Product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  setIsVisibleBag: (isVisible: boolean) =>
    set(() => ({
      isVisibleBag: isVisible,
    })),
}));
