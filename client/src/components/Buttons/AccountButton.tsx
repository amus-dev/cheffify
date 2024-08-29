import AccountIcon from "@/assets/images/icons/account.svg";
import ShopIcon from "@/assets/images/icons/bag.svg";
import useCartStore from "@/stores/productsStore";
import { Link } from "react-router-dom";

const AccountButton = () => {
  const token = localStorage.getItem("token");
  const totalQuantity = useCartStore((state) => state.getTotalQuantity());
  const toggleCartVisibility = useCartStore(
    (state) => state.toggleCartVisibility
  );

  const showCart = () => {
    toggleCartVisibility();
  };

  return (
    <div className="flex items-center gap-[1px]">
      <Link
        to={`${token ? "/perfil" : "/login"}`}
        unstable_viewTransition
        className="bg-primary text-white flex items-center px-[14px] py-[6px] rounded-l-full text-[12px] gap-2 font-medium hover:bg-secondary transition-all duration-500 h-[30px]"
      >
        <img src={AccountIcon} alt="Icono de cuenta" className="size-[16px]" />
        <span className="hidden lg:block">Mi cuenta</span>
      </Link>
      <button
        className="group bg-primary py-[6px] px-3 rounded-r-full hover:bg-secondary transition-all duration-500 h-[30px] relative"
        onClick={showCart}
      >
        <img
          src={ShopIcon}
          alt="Icono de shop para ver el carrito"
          className="size-[17px]"
        />
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-1 bg-secondary text-white rounded-full w-[15px] h-[15px] flex items-center justify-center text-[10px] transition-all duration-500 group-hover:bg-primary">
            {totalQuantity}
          </span>
        )}
      </button>
    </div>
  );
};

export default AccountButton;
