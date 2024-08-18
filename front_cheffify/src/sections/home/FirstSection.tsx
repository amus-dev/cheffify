import IconEmoteLove from "@assets/images/icons/icon-emote-love.svg";
import ImageBackgroundItem from "@assets/images/img/item-bg-menu.svg";
import ImagePrincipal from "@assets/images/img/principal-image.svg";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <section className="flex items-center justify-between px-[20px] lg:pl-[60px] xl:pl-[170px] lg:pr-[0px] mt-6">
      <div className="lg:max-w-[620px]">
        <h1 className="text-primary text-[42px] font-extrabold lg:max-w-[400px] leading-[42px] text-center lg:text-start">
          Comida congelada{" "}
          <strong className="text-secondary">a domicilio</strong>
        </h1>
        <p className="text-primary text-[19px] mt-4 text-center text-balance lg:text-start">
          Platos de primera, cocinados de manera artesanal con productos
          seleccionados,{" "}
          <strong className="text-secondary">
            sin aditivos ni conservantes
          </strong>
          . Recibe nuestra comida directamente en tu casa.{" "}
          <strong className="flex gap-2 items-center justify-center lg:justify-start">
            ¡Garantía de calidad!
            <img src={IconEmoteLove} className="size-5" />
          </strong>
        </p>
        <div className="flex flex-col sm:flex-row items-center mt-10 gap-2 justify-center lg:justify-start">
          <Link
            to="/shop"
            unstable_viewTransition
            className="bg-secondary text-white font-bold w-full max-w-[240px] rounded-full text-[17px] text-center px-12 py-4 hover:bg-primary transition-all duration-500"
          >
            Hacer pedido
          </Link>
          <Link
            to="/#comida"
            className="border-secondary border-2 text-secondary font-bold w-full max-w-[240px] rounded-full text-[17px] text-center px-12 py-4 hover:border-primary hover:bg-primary hover:text-white transition-all duration-500"
          >
            Saber más
          </Link>
        </div>
      </div>

      <img
        className="absolute left-0 top-0 hidden xl:block w-[100px] z-20"
        src={ImageBackgroundItem}
        alt="Imagen decorativa para el sitio cheffify ubicado en el menu de navegación"
      />
      <div className="w-full hidden lg:block">
        <img src={ImagePrincipal} className="w-full" />
      </div>
    </section>
  );
};

export default FirstSection;
