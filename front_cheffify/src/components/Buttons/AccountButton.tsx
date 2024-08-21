import { Link } from "react-router-dom";
import AccountIcon from "@/assets/images/icons/account.svg";
import ShopIcon from "@/assets/images/icons/bag.svg";

const AccountButton = () => {
  return (
    <div className="flex items-center gap-[1px]">
      <Link
        to="/login"
        unstable_viewTransition
        className="bg-primary text-white flex items-center px-[14px] py-[6px] rounded-l-full text-[12px] gap-2 font-medium hover:bg-secondary transition-all duration-500 h-[30px]"
      >
        <img src={AccountIcon} alt="Icono de cuenta" className="size-[16px]" />
        <span className="hidden lg:block">Mi cuenta</span>
      </Link>
      <button className="bg-primary py-[6px] px-3 rounded-r-full hover:bg-secondary transition-all duration-500 h-[30px]">
        <img
          src={ShopIcon}
          alt="Icono de shop para ver el carrito"
          className="size-[17px]"
        />
      </button>
    </div>
  );
};

export default AccountButton;
