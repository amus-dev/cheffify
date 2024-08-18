import { Link } from "react-router-dom";

import Logo from "@assets/images/logo/cheffify-logo.svg";
import ImageBackgroundItem from "@assets/images/img/item-bg-menu.svg";
import AccountButton from "@components/Buttons/AccountButton";
import FoodButton from "@components/Buttons/FoodButton";
import ButtonLink from "@components/Navbar/ButtonLink";
import { MENU_ITEMS } from "@utils/const/menu";

const MenuNav = () => {
  return (
    <nav className="px-[20px] lg:px-[60px] py-[30px] xl:px-[170px] flex items-center justify-between relative">
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
      <ul className="md:flex gap-10 hidden">
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
        <AccountButton />
      </div>

      <img
        className="absolute left-0 top-0 hidden xl:block w-[100px]"
        src={ImageBackgroundItem}
        alt="Imagen decorativa para el sitio cheffify ubicado en el menu de navegación"
      />
    </nav>
  );
};

export default MenuNav;
