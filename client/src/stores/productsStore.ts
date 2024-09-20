import { create } from "zustand";
import { Product, ProductsStore } from "@/utils/types/productTypes";
import { PRODUCTS } from "@/config/database.products";

interface CartStore {
  productsBag: ProductsStore[];
  productsFilter: Product[];
  isCartVisible: boolean;
  addProduct: (product: ProductsStore) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  toggleCartVisibility: () => void;
  getTotalQuantity: () => number;
  getTotalPrice: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  productsBag: [],
  isCartVisible: false,
  productsFilter: PRODUCTS,

  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.productsBag.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        return {
          productsBag: state.productsBag.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          ),
        };
      } else {
        return {
          productsBag: [
            ...state.productsBag,
            { ...product, quantity: product.quantity },
          ],
        };
      }
    }),

  removeProduct: (id) =>
    set((state) => ({
      productsBag: state.productsBag.filter((product) => product.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      productsBag: state.productsBag.map((product) =>
        product.id === id ? { ...product, quantity } : product
      ),
    })),

  clearCart: () =>
    set(() => ({
      productsBag: [],
    })),

  toggleCartVisibility: () =>
    set((state) => ({
      isCartVisible: !state.isCartVisible,
    })),

  getTotalQuantity: () => {
    const productsBag = get().productsBag;
    return productsBag.reduce((total, product) => total + product.quantity, 0);
  },

  getTotalPrice: () => {
    const productsBag = get().productsBag;
    return productsBag.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },
}));

export default useCartStore;
