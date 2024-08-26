import Logo from "@/assets/images/logo/cheffify-logo.svg";
import AccountButton from "@/components/Buttons/AccountButton";
import FoodButton from "@/components/Buttons/FoodButton";
import ButtonLink from "@/components/common/navbar/ButtonLink";
import CartProducts from "@/components/Products/CartProducts";
import { MENU_ITEMS } from "@/utils/const/menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

declare module "react-router-dom" {
  interface LinkProps {
    unstable_viewTransition?: boolean;
  }
}

const MenuNav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`top-0 left-0 right-0 z-20 px-[20px] lg:px-[60px] py-[20px] xl:px-[170px] flex items-center justify-between bg-white transition-shadow duration-500 ${
        hasScrolled ? "shadow-lg !z-50 !fixed" : "relative"
      }`}
    >
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
        {MENU_ITEMS.map(({ icon, alt, ariaLabel, text, url, ancla }, index) => (
          <li key={index}>
            <ButtonLink
              icon={icon}
              alt={alt}
              ariaLabel={ariaLabel}
              text={text}
              url={url}
              ancla={ancla}
            />
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2">
        <FoodButton />
        <AccountButton />
      </div>
      <CartProducts />
    </nav>
  );
};

export default MenuNav;