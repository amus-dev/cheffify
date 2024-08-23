import IconClose from "@/assets/images/icons/icon-close.svg";
import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import useCartStore from "@/stores/productsStore";
import { DELIVERY } from "@/utils/const/products";
import { formatPriceCLP } from "@/utils/functions/products";

const CartProducts = () => {
  const products = useCartStore((state) => state.products);
  const isCartVisible = useCartStore((state) => state.isCartVisible);
  const toggleCartVisibility = useCartStore(
    (state) => state.toggleCartVisibility
  );
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice());

  const deleteProduct = () => {
    console.log("Eliminar producto");
  };

  return (
    <div
      className={`bg-white w-full max-w-[300px] absolute top-20 right-20 shadow-card-shadow p-3 rounded-lg transition-all duration-300 ${
        isCartVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative">
        <h4 className="text-primary text-[15px] font-bold text-center">
          Mi Cesta
        </h4>
        <button className="absolute right-0 top-0">
          <img
            src={IconClose}
            alt=""
            className="size-4 transition-all duration-500 hover:rotate-90"
            onClick={toggleCartVisibility}
          />
        </button>
      </div>
      {products.map(({ id, image, title, quantity, price }) => (
        <div className="flex items-center justify-between mt-5 gap-2" key={id}>
          <div className="flex items-center justify-start gap-3">
            <img
              src={image}
              className="aspect-square w-full max-w-[45px] rounded-md"
            />
            <h5 className="text-grayLight text-[11px] max-w-[110px] text-balance">
              {title}
            </h5>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button onClick={deleteProduct}>
              <img src={IconTrash} alt="" className="size-4" />
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

      <div className="w-full border-t border-separator mt-4">
        <div className="flex items-center justify-between mt-4">
          <span className="text-[12px] font-black text-grayCart">Subtotal</span>
          <span className="text-[12px] font-black text-grayCart">
            {formatPriceCLP(getTotalPrice)}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-black text-grayCart">
            Despacho*
          </span>
          <span className="text-[12px] font-black text-grayCart">
            {formatPriceCLP(DELIVERY)}
          </span>
        </div>
        <div className="flex items-center justify-between my-2">
          <span className="text-[12px] font-black text-green">
            Total pedido
          </span>
          <span className="text-[12px] font-black text-green">
            {formatPriceCLP(getTotalPrice + DELIVERY)}
          </span>
        </div>
        <button className="bg-secondary text-white font-bold w-full rounded-lg text-[14px] text-center px-10 py-3 hover:bg-primary transition-all duration-500">
          Realizar pedido
        </button>
        <span className="text-[10px] italic text-primary">
          *Precio de despacho para Región Metropolitana de Santiago.
        </span>
      </div>
    </div>
  );
};

export default CartProducts;
