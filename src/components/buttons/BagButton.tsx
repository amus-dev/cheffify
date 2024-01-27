import { useCartStore } from "@store/cartStore.ts";
import BagIcon from "@assets/icons/shopping-bag.svg";
const BagButton = () => {
  const { products } = useCartStore((state: any) => ({
    products: state.products,
  }));

  return (
    <button
      className="relative rounded-r-full bg-[#262C57] px-3 py-2 transition-all duration-300 hover:bg-[#275C73]"
      aria-label="Boton para abrir el carrito de compras"
    >
      <img
        className="size-4"
        src={BagIcon.src}
        alt="Icono de carrito de compras"
      />
      {products.length > 0 && (
        <span className="leading-0 absolute right-0 top-0 flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#D77466] text-xs text-white">
          {products.length}
        </span>
      )}
    </button>
  );
};

export default BagButton;
