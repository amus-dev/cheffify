import create from "zustand";
import { ProductsStore } from "@/utils/types/productTypes"; // Asegúrate de que la ruta y el nombre sean correctos

interface CartStore {
  products: ProductsStore[];
  addProduct: (product: ProductsStore) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  products: [],

  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        return {
          products: state.products.map((p) =>
            p.id === product.id
              ? { ...p, quantity: p.quantity + product.quantity }
              : p
          ),
        };
      } else {
        return {
          products: [
            ...state.products,
            { ...product, quantity: product.quantity },
          ],
        };
      }
    }),

  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),

  updateQuantity: (id, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity } : product
      ),
    })),

  clearCart: () =>
    set(() => ({
      products: [],
    })),
}));

export default useCartStore;
