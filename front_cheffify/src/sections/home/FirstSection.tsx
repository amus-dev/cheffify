import IconEmoteLove from "@assets/images/icons/icon-emote-love.svg";
import ImagePrincipal from "@assets/images/img/principal-image.svg";

const FirstSection = () => {
  return (
    <div className="flex items-center justify-between px-[20px] lg:pl-[170px] lg:pr-[0px] mt-6">
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
          <span></span>
        </p>
      </div>
      <div className="w-full hidden lg:block">
        <img src={ImagePrincipal} className="w-full max-w-[850px]" />
      </div>
    </div>
  );
};

export default FirstSection;
