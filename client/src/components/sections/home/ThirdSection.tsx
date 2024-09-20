import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Food from "@/assets/images/icons/food-shadow.svg";
import Hearth from "@/assets/images/icons/hearth-shadow.svg";
import IconArrow from "@/assets/images/icons/icon-arrow-down.svg";
import Tomato from "@/assets/images/icons/tomato-shadow.svg";
import Delivery from "@/assets/images/icons/truck-shadow.svg";
import StoreIcon from "@/assets/images/icons/icon-store.svg";
import { Link } from "react-router-dom";
import ArrowScrollButton from "@/components/Buttons/ArrowScrollButton";
import FirstImageBGLeft from "@/assets/images/img/bg-third-left.svg";
import FirstImageBGRight from "@/assets/images/img/bg-third-right.svg";

const ThirdSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Cuando el 20% del elemento esté visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Inicialmente oculto y desplazado hacia abajo
      animate={controls}
      transition={{ duration: 0.8 }}
      id="comidaGourmet"
      className="bg-white flex flex-col justify-center items-center relative px-[20px] pb-10"
    >
      <a
        href="#comidaGourmet"
        className="relative -top-12 bg-white rounded-full p-8"
      >
        <img src={IconArrow} alt="Icon Arrow" className="size-8" />
      </a>
      <h2 className="text-primary text-[42px] font-extrabold text-center">
        Comida congelada <strong className="text-secondary">gourmet.</strong>
      </h2>

      {/* Lista de íconos animada */}
      <motion.ul
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-32 justify-items-center items-start mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.li className="flex flex-col items-center">
          <img
            src={Tomato}
            alt="100% Ingredientes Naturales"
            className="size-16"
          />
          <p className="text-primary text-[18px] text-center mt-6 min-h-[50px]">
            100% Ingredientes <br /> Naturales
          </p>
        </motion.li>
        <motion.li className="flex flex-col items-center">
          <img
            src={Hearth}
            alt="Sin aditivos ni conservantes"
            className="size-16"
          />
          <p className="text-primary text-[18px] text-center mt-6 min-h-[42px]">
            Sin aditivos ni <br /> conservantes
          </p>
        </motion.li>
        <motion.li className="flex flex-col items-center">
          <img src={Delivery} alt="Envíos a domicilio" className="size-16" />
          <p className="text-primary text-[18px] text-center mt-6 min-h-[42px]">
            Envíos a domicilio
          </p>
        </motion.li>
        <motion.li className="flex flex-col items-center">
          <img src={Food} alt="Hecho como en casa" className="size-16" />
          <p className="text-primary text-[18px] text-center mt-6 min-h-[42px]">
            Hecho como en <br /> casa
          </p>
        </motion.li>
      </motion.ul>

      {/* Botón animado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link
          to="/shop"
          unstable_viewTransition
          className="flex items-center px-14 py-4 border-2 border-secondary rounded-full text-secondary gap-6 mt-10 transition-transform duration-500 ease-in-out hover:scale-105 mb-10"
        >
          <img
            src={StoreIcon}
            alt="Icono de la tienda"
            className="size-8 transition-transform duration-200 ease-in-out"
          />
          <p className="font-bold text-lg">Visitar tienda</p>
        </Link>
      </motion.div>

      <ArrowScrollButton url="#blockCarousel" />

      {/* Imágenes decorativas animadas */}
      <motion.img
        src={FirstImageBGLeft}
        className="absolute left-0 top-20 w-full max-w-[150px] hidden lg:block"
        alt="Imagen decorativa de flor verde"
        initial={{ opacity: 0, x: -50 }} // Desplazado hacia la izquierda
        animate={controls}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <motion.img
        src={FirstImageBGRight}
        className="absolute right-0 top-20 w-full max-w-[300px] hidden lg:block"
        alt="Imagen decorativa de flor naranja"
        initial={{ opacity: 0, x: 50 }} // Desplazado hacia la derecha
        animate={controls}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.section>
  );
};

export default ThirdSection;
