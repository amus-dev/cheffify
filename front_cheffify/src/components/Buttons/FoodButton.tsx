import BellIcon from "@/assets/images/icons/bell.svg";
import { Link } from "react-router-dom";

const FoodButton = () => {
  return (
    <Link
      to="/shop"
      aria-label="Boton de pedir comida que te lleva a la sección de todos los productos"
      unstable_viewTransition
      className="bg-secondary flex items-center rounded-full text-[12px] px-[7px] lg:px-[32px] gap-2 py-[6px] font-medium hover:bg-primary transition-all duration-500"
    >
      <img
        src={BellIcon}
        alt="Icono de campana para el boton pedir comida"
        className="size-[16px]"
      />
      <span className="hidden lg:block">Pedir comida</span>
    </Link>
  );
};

export default FoodButton;
