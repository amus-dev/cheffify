import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import useCartStore from "@/stores/productsStore";
import { DELIVERY } from "@/utils/const/products";
import { formatPriceCLP } from "@/utils/functions/products";
import { useState } from "react";

const ResumeCart = () => {
  const products = useCartStore((state) => state.products);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice());
  const removeProduct = useCartStore((state) => state.removeProduct);

  const [removingProductId, setRemovingProductId] = useState<number | null>(
    null
  );

  const handleRemoveProduct = (id: number) => {
    setRemovingProductId(id);
    setTimeout(() => {
      removeProduct(id);
      setRemovingProductId(null);
    }, 500);
  };

  return (
    <div className="shadow-card-shadow rounded-xl p-4 overflow-hidden flex flex-col">
      <h2 className="text-[19px] text-primary font-bold mb-4">
        Resumen del pedido
      </h2>
      <div>
        {products.map(({ id, image, title, quantity, price }) => (
          <div
            className={`flex justify-between transition-all duration-500 mb-3 ${
              removingProductId === id ? "opacity-0 translate-x-[-100%]" : ""
            }`}
            key={id}
          >
            <div className="flex items-center justify-start gap-3">
              <img
                src={image}
                className="aspect-square w-full max-w-[45px] rounded-md"
              />
              <h5 className="text-grayLight text-[11px] text-balance">
                {title}
              </h5>
            </div>
            <div className="flex items-center justify-between gap-4">
              <button
                onClick={() => handleRemoveProduct(id)}
                className="w-[15px] h-[15px]"
              >
                <img
                  src={IconTrash}
                  alt={`Icono para eliminar el producto ${title}`}
                  className="w-[15px] h-[15px] transition-all duration-500 hover:scale-110"
                />
              </button>
              <div className="flex items-center justify-center gap-1 border border-secondary rounded-md p-1 leading-none">
                <button
                  className="text-secondary text-[16px]"
                  onClick={() => updateQuantity(id, quantity - 1)}
                >
                  -
                </button>
                <span className="text-secondary text-[11px]">{quantity}</span>
                <button
                  className="text-secondary text-[16px] mt-[3px]"
                  onClick={() => updateQuantity(id, quantity + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-green text-[12px] font-bold">
                {formatPriceCLP(price * quantity)}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-b border-separator py-4 mt-2">
        <div className="flex items-center justify-between">
          <h3 className="text-grayLight font-extrabold text-[17px]">
            Subtotal
          </h3>
          <span className="text-grayLight font-extrabold text-[17px]">
            {formatPriceCLP(getTotalPrice)}
          </span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <h3 className="text-grayCart text-[14px]">Despacho*</h3>
          <span className="text-grayCart text-[14px]">
            {formatPriceCLP(DELIVERY)}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <h3 className="text-grayLight font-extrabold text-[15px]">
          Total pedido
        </h3>
        <span className="text-[20px] font-bold text-green">
          {formatPriceCLP(getTotalPrice + DELIVERY)}
        </span>
      </div>
      <div className="mt-4">
        <p className="font-bold text-green text-[13px]">
          Su pedido será despachado 24 horas después de la compra, de lunes a
          viernes
        </p>
        <p className="italic text-grayLight text-[12px]">
          *IVA incluido en el precio de los productos
        </p>
      </div>
    </div>
  );
};

export default ResumeCart;
