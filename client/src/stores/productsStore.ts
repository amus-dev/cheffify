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
  filterProductsByCategory: (category: string) => void;
  sortProducts: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filterProductsByPrice: (price: number[]) => void;
  activeCategory: string;
  allProducts: Product[];
  activePriceRange: number[];
  sortProductsList: (products: Product[], sortOrder: string) => Product[];
  activeSortOrder: string;
  totalPriceBag: () => number;
}

const useCartStore = create<CartStore>((set, get) => ({
  productsBag: [],
  isCartVisible: false,
  productsFilter: PRODUCTS,
  allProducts: PRODUCTS,
  activeCategory: "",
  activePriceRange: [0, Infinity],
  activeSortOrder: "",

  // Añadir un producto al carrito
  addProduct: (product) =>
    set((state) => ({
      productsBag: upsertProduct(state.productsBag, product),
    })),

  // Eliminar un producto del carrito
  removeProduct: (id) =>
    set((state) => ({
      productsBag: state.productsBag.filter((product) => product.id !== id),
    })),

  // Actualizar la cantidad de un producto en el carrito
  updateQuantity: (id, quantity) =>
    set((state) => ({
      productsBag: updateProductQuantity(state.productsBag, id, quantity),
    })),

  // Limpiar el carrito
  clearCart: () =>
    set(() => ({
      productsBag: [],
    })),

  // Alternar la visibilidad del carrito
  toggleCartVisibility: () =>
    set((state) => ({
      isCartVisible: !state.isCartVisible,
    })),

  // Obtener la cantidad total de productos en el carrito
  getTotalQuantity: () => {
    const productsBag = get().productsBag;
    return productsBag.reduce((total, product) => total + product.quantity, 0);
  },

  // Obtener el precio total del carrito
  getTotalPrice: () => {
    const productsBag = get().productsBag;
    return productsBag.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },

  // Filtrar productos por categoría
  filterProductsByCategory: (category) => {
    set({ activeCategory: category });

    const { allProducts, activePriceRange, activeSortOrder } = get();
    const filteredProducts = filterAndSortProducts(
      allProducts,
      category,
      activePriceRange,
      activeSortOrder
    );

    set({ productsFilter: filteredProducts });
  },

  // Ordenar productos
  sortProducts: (e) => {
    const sortOrder = e.target.value;
    set({ activeSortOrder: sortOrder });

    const { productsFilter } = get();
    const sortedProducts = get().sortProductsList(productsFilter, sortOrder);

    set({ productsFilter: sortedProducts });
  },

  // Ordenar productos de acuerdo al criterio seleccionado
  sortProductsList: (products, sortOrder) => {
    const sortedProducts = [...products];
    return sortProductsHelper(sortedProducts, sortOrder);
  },

  // Filtrar productos por rango de precios
  filterProductsByPrice: (price) => {
    set({ activePriceRange: price });

    const { allProducts, activeCategory, activeSortOrder } = get();
    const filteredProducts = filterAndSortProducts(
      allProducts,
      activeCategory,
      price,
      activeSortOrder
    );

    set({ productsFilter: filteredProducts });
  },
  totalPriceBag: () => {
    const productsBag = get().productsBag;
    return productsBag.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  },
}));

// Función para añadir o actualizar un producto en el carrito
const upsertProduct = (
  productsBag: ProductsStore[],
  product: ProductsStore
) => {
  const existingProduct = productsBag.find((p) => p.id === product.id);
  if (existingProduct) {
    return productsBag.map((p) =>
      p.id === product.id
        ? { ...p, quantity: p.quantity + product.quantity }
        : p
    );
  }
  return [...productsBag, { ...product, quantity: product.quantity }];
};

// Función para actualizar la cantidad de un producto en el carrito
const updateProductQuantity = (
  productsBag: ProductsStore[],
  id: number,
  quantity: number
) => {
  return productsBag.map((product) =>
    product.id === id ? { ...product, quantity } : product
  );
};

// Función para ordenar productos según un criterio
const sortProductsHelper = (products: Product[], sortOrder: string) => {
  if (sortOrder === "asc") {
    return products.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "desc") {
    return products.sort((a, b) => b.price - a.price);
  }
  return products;
};

// Función para filtrar y ordenar productos
const filterAndSortProducts = (
  allProducts: Product[],
  category: string,
  priceRange: number[],
  sortOrder: string
) => {
  let filteredProducts = allProducts.filter(
    (product) =>
      (!category || product.category === category) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
  );

  // Aplicar ordenación si hay un orden activo
  if (sortOrder) {
    filteredProducts = sortProductsHelper(filteredProducts, sortOrder);
  }

  return filteredProducts;
};

export default useCartStore;
