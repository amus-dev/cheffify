import Logo from "@/assets/images/logo/cheffify-logo.svg";
import AccountButton from "@/components/Buttons/AccountButton";
import FoodButton from "@/components/Buttons/FoodButton";
import LogOutButton from "@/components/Buttons/LogOutButton";
import ButtonLink from "@/components/common/navbar/ButtonLink";
import CartProducts from "@/components/Products/CartProducts";
import { MENU_ITEMS } from "@/utils/const/menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const MenuNav = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
        controls.start({
          y: 0, // Menú en posición fixed
          opacity: 1,
          transition: { duration: 0.3 },
        });
      } else {
        setHasScrolled(false);
        controls.start({
          y: 0, // Mantiene el menú visible
          opacity: 1, // Mantiene la opacidad visible
          transition: { duration: 0.3 },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }} // Al cargar la página, siempre visible
      animate={controls} // Controla la animación al hacer scroll
      className={`fixed top-0 left-0 right-0 px-[20px] lg:px-[60px] py-[20px] xl:px-[170px] flex items-center justify-between bg-white transition-shadow duration-500 z-30 ${
        hasScrolled ? "shadow-lg" : ""
      }`}
    >
      <div>
        <Link
          to="/"
          unstable_viewTransition
          aria-label="Logo de Cheffify que lleva a la home"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            className="w-full max-w-[115px] transition-all duration-500"
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
        <LogOutButton />
      </div>
      <CartProducts />
    </motion.nav>
  );
};

export default MenuNav;
