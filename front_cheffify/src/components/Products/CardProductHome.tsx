import IconShop from "@/assets/images/icons/bag.svg";
import IconCheck from "@/assets/images/icons/check.svg";
import useCartStore from "@/stores/productsStore";
import { formatPriceCLP } from "@/utils/functions/products";
import { showSuccessToast } from "@/utils/functions/showToast";
import { CardProductType } from "@/utils/types/productTypes";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardProductHome = ({
  id,
  slug,
  title,
  description,
  price,
  image,
  alt,
}: CardProductType) => {
  const [quantity, setQuantity] = useState(1);
  const addProduct = useCartStore((state) => state.addProduct);

  const addProductToCart = () => {
    addProduct({
      id,
      slug,
      title,
      description,
      price,
      image,
      alt,
      quantity,
    });
    showSuccessToast({
      message: "Producto agregado al carrito",
      icon: IconCheck,
    });
  };

  return (
    <article className="flex flex-col rounded-[15px] p-[10px] w-full max-w-[280px] bg-white shadow-card-shadow">
      <Link
        to={`/shop/${slug}`}
        unstable_viewTransition
        aria-label={`Link que te lleva al interior del producto ${title}`}
      >
        <img
          alt={alt}
          src={image}
          className="aspect-square rounded-[15px] brightness-75 transition duration-500 ease-in-out hover:brightness-110"
        />
      </Link>
      <div className="px-2 py-4">
        <h3 className="text-grayLight font-bold text-[19px] min-h-[42px] leading-[19px] mb-4">
          {title}
        </h3>
        <p className="text-grayLight text-[12px] min-h-[90px] mb-6">
          {description}
        </p>
        <p className="text-primary text-[19px] font-bold">
          {formatPriceCLP(price)}
        </p>
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
        <button
          className="flex items-center justify-center gap-4 bg-secondary w-full rounded-[5px] text-[15px] font-medium transition-all duration-500 hover:bg-primary"
          onClick={addProductToCart}
        >
          Agregar{" "}
          <img
            src={IconShop}
            className="size-4"
            alt="Icono de bolsa para agregar productos"
          />
        </button>
      </div>
    </article>
  );
};

export default CardProductHome;
