import { useRef, useEffect } from "react";
import { useCartStore } from "@/store/cartStore.ts";
import PastelDeChocloPollo from "@/assets/img/foods/pasteldechoclopollo.webp";
import IconClose from "@/assets/icons/icon-close.svg";
import IconTrash from "@/assets/icons/icon-trash.svg";

const BagPopUp = () => {
  const newRef = useRef<any>(null);
  const { isVisibleBag, setIsVisibleBag, products } = useCartStore((state) => ({
    products: state.products,
    isVisibleBag: state.isVisibleBag,
    setIsVisibleBag: state.setIsVisibleBag,
  }));

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  const handleOutsideClick = (e: Event) => {
    if (newRef.current && !newRef.current.contains(e.target)) {
      setIsVisibleBag(false);
    }
  };

  return (
    <div
      ref={newRef}
      className={`absolute right-0 top-10 rounded-xl border border-[#D77466] bg-white p-3 shadow-2xl shadow-[#d7746666] transition-all duration-300 ${isVisibleBag ? "opacity-100" : "opacity-0"}`}
    >
      <div className="relative">
        <h3 className="text-center text-sm font-bold text-[#262C57]">
          Mi Cesta
        </h3>
        <button
          className="absolute right-0 top-0"
          onClick={() => setIsVisibleBag(false)}
          aria-label="Boton para cerrar el carrito de compras"
        >
          <img
            className=" h-[15px] w-[15px] cursor-pointer"
            src={IconClose.src}
            alt="Icono para cerrar el carrito de compras"
          />
        </button>
        {products.length === 0 ? (
          <p className="text-center text-xs font-bold text-[#646477]">
            No hay productos en tu cesta
          </p>
        ) : (
          <div className="mt-3 flex flex-row justify-between gap-4">
            <div className="flex w-full flex-row items-center justify-between gap-2">
              <img
                className="object-fit h-[45px] w-[45px] rounded-lg"
                src={PastelDeChocloPollo.src}
                alt="Emote icon"
              />
              <h4 className="text-xs text-[#646477]">Pollo con tocino</h4>
            </div>
            <div className="flex flex-row items-center">
              <button aria-label="Boton para eliminar producto del carrito de compras">
                <img
                  className=" h-[15px] w-[15px] rounded-lg"
                  src={IconTrash.src}
                  alt="Icono para eliminar producto del carrito de compras"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BagPopUp;
