import IconArrow from "@assets/images/icons/icon-arrow-down.svg";
import CardProductHome from "@components/products/CardProductHome";
import { Link } from "react-router-dom";

import ItemImageElement from "@assets/images/img/item-bg-second-section.svg";
import ItemImageElementFlower from "@assets/images/img/item-bg-flower-second-section.svg";

const SecondSection = () => {
  return (
    <section
      className="bg-secondaryLight mt-28 flex flex-col justify-center items-center relative px-[20px] pb-28"
      id="comemos"
    >
      <a
        href="#comemos"
        className="relative -top-12 bg-secondaryLight rounded-full p-8"
      >
        <img src={IconArrow} alt="Icon Arrow" className="size-8" />
      </a>
      <h2 className="text-primary text-[42px] font-extrabold text-center">
        ¿Qué <strong className="text-secondary">comemos hoy?</strong>
      </h2>
      <p className="text-primary text-[19px] text-balance text-center max-w-[570px]">
        Sabemos que cuesta decir quién es mejor, si el papá o la mamá. A
        nosotros también, por eso dejamos una sugerencia, tú eliges.
      </p>
      <div className="grid mt-10 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10">
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
        <CardProductHome />
      </div>
      <Link
        to="/shop"
        unstable_viewTransition
        className="w-full max-w-[240px] rounded-full text-white bg-primary font-bold text-[17px] text-center px-10 py-4 mt-10 hover:bg-secondary transition-all duration-500"
      >
        Más platos
      </Link>
      <img
        src={ItemImageElement}
        alt="Imagen decorativa para la sección dos"
        className="absolute top-10 left-0 w-[75px] h-[310px] hidden lg:block"
      />
      <img
        src={ItemImageElementFlower}
        alt="Imagen decorativa de flores para la sección dos"
        className="absolute top-50 right-0 w-[190px] h-[290px] hidden lg:block"
      />
    </section>
  );
};

export default SecondSection;
