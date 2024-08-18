import { Link } from "react-router-dom";

import Logo from "@assets/images/logo/cheffify-logo.svg";
import FoodButton from "@components/Buttons/FoodButton";
import ButtonLink from "@components/Navbar/ButtonLink";
import { MENU_ITEMS } from "@utils/const/menu";

const MenuNav = () => {
  return (
    <nav className="px-[170px] py-[30px] flex items-center justify-between">
      <div>
        <Link
          to="/"
          unstable_viewTransition
          aria-label="Logo de Cheffify que lleva a la home"
        >
          <img
            className="w-full max-w-[115px] hover:scale-110 transition-all duration-500"
            src={Logo}
            alt="Logo del menu navegación Cheffify"
          />
        </Link>
      </div>
      <ul className="flex gap-10">
        {MENU_ITEMS.map(({ icon, alt, ariaLabel, text, url }) => (
          <ButtonLink
            icon={icon}
            alt={alt}
            ariaLabel={ariaLabel}
            text={text}
            url={url}
          />
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <FoodButton />
      </div>
    </nav>
  );
};

export default MenuNav;
