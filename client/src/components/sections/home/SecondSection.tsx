import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import IconArrow from "@/assets/images/icons/icon-arrow-down.svg";
import ItemImageElementFlower from "@/assets/images/img/item-bg-flower-second-section.svg";
import ItemImageElement from "@/assets/images/img/item-bg-second-section.svg";
import CardProductHome from "@/components/Products/CardProductHome";
import { PRODUCTS } from "@/config/database.products";
import { randomArray } from "@/utils/functions/products";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SecondSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Elementos aparecen con opacidad 0 y desplazados
      animate={controls}
      transition={{ duration: 0.8 }}
      className="bg-secondaryLight mt-28 flex flex-col justify-center items-center relative px-[20px] pb-20"
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
      <motion.div
        className="grid mt-10 gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 z-10"
        initial={{ opacity: 0, y: 50 }} // Inicialmente oculto y desplazado
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }} // Se anima después del texto
      >
        {randomArray({ arr: PRODUCTS, totalItems: 4 }).map(
          ({ id, slug, title, description, price, image, alt }) => (
            <CardProductHome
              key={id}
              id={id}
              slug={slug}
              title={title}
              description={description}
              price={price}
              image={image}
              alt={alt}
            />
          )
        )}
      </motion.div>
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
    </motion.section>
  );
};

export default SecondSection;
