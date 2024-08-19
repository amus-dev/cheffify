import ImageFood from "@assets/images/foods/arroz_curry.webp";
import IconShop from "@assets/images/icons/bag.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardProductHome = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <article className="flex flex-col rounded-[15px] p-[10px] w-full max-w-[280px] bg-white shadow-card-shadow">
      <Link to="shop/product" unstable_viewTransition>
        <img
          src={ImageFood}
          className="aspect-square rounded-[15px] brightness-75 transition duration-500 ease-in-out hover:brightness-110"
        />
      </Link>
      <div className="px-2 py-4">
        <h3 className="text-grayLight font-bold text-[19px]">Arroz Curry</h3>
        <p className="text-grayLight text-[12px] min-h-[90px]">
          Un viaje de sabores intensos, una delicia especiada que transporta tus
          sentidos a lejanas tierras orientales.
        </p>
        <p className="text-primary text-[19px] font-bold">$1.430</p>
      </div>
      <div className="flex justify-between gap-4 px-2">
        <div className="flex items-center rounded-[5px] border border-secondary w-full max-w-[70px]">
          <span className="px-[10px] text-[17px] font-bold text-secondary">
            {quantity}
          </span>
          <div className="flex flex-col justify-center w-full border-l border-secondary overflow-hidden">
            <button
              className="text-secondary font-semibold text-[16px] transition-all duration-500 hover:bg-primary hover:text-white rounded-tr-[4px]"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
            <button
              className="text-secondary font-semibold text-[16px] transition-all duration-500 hover:bg-primary hover:text-white rounded-br-[4px]"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <button className="flex items-center justify-center gap-4 bg-secondary w-full rounded-[5px] text-[15px] font-medium transition-all duration-500 hover:bg-primary">
          Agregar <img src={IconShop} className="size-4" />
        </button>
      </div>
    </article>
  );
};

export default CardProductHome;
