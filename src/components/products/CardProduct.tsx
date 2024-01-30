interface Props {
  id: number;
  title: string;
  description: string;
  price: number;
}

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { formatPriceCLP } from "@/utils/formats";
import PastelDeChocloPollo from "@/assets/img/foods/pasteldechoclopollo.webp";

const CardProduct = ({ id, title, description, price }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useCartStore((state) => ({
    addProduct: state.addProduct,
  }));

  const handleAddProduct = (
    id: number,
    title: string,
    price: number,
    quantity: number,
  ) => {
    addProduct({ id, title, price, quantity });
  };

  return (
    <article className="rounded-xl bg-white p-3 shadow-xl shadow-[#d7746666]">
      <div className="header">
        <a href="/galletas">
          <img
            className="duration-800 aspect-square rounded-xl saturate-[0.7] transition-all hover:scale-[1.02] hover:saturate-100"
            loading="lazy"
            src={`${PastelDeChocloPollo.src}`}
            alt="Flecha hacia abajo"
          />
        </a>
      </div>
      <div className="body mt-4">
        <a href="/galletas">
          <h3 className="text-md mb-3 min-h-[42px] font-bold text-[#646477] transition-colors duration-300 hover:text-[#D77466]">
            {title}
          </h3>
        </a>
        <p className="min-h-[90px] text-pretty text-xs text-[#646477]">
          {description}
        </p>
        <p className="mt-4 text-xl font-bold text-[#262C57]">
          {formatPriceCLP(price)}
        </p>
      </div>
      <div className="footer mt-3 flex flex-row items-center justify-between gap-2">
        <div className="flex w-fit flex-row rounded-md border-[1px] border-[#D77466]">
          <span className="px-3 py-1 text-lg font-bold text-[#D77466]">1</span>
          <div className="flex flex-col items-center justify-center border-l-[1px] border-[#D77466] px-2">
            <button className="leading-[13px] text-[#D77466]">+</button>
            <button className="leading-[13px] text-[#D77466]">-</button>
          </div>
        </div>
        <div className="h-full w-full">
          <button
            className="h-[40px] w-full rounded-md bg-[#D77466] text-center text-sm text-white transition-all duration-300 hover:bg-[#275C73]"
            onClick={() => handleAddProduct(id, title, price, quantity)}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
};

export default CardProduct;
