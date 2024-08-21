import CarouselHome from "@/components/carousels/CarouselHome";
import BgPoints from "@/assets/images/img/bg-points.svg";
import { Link } from "react-router-dom";

const FourSection = () => {
  return (
    <section
      className="flex justify-center w-full mt-10 px-[20px]"
      id="blockCarousel"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center bg-green w-full max-w-[1110px] px-[40px] pt-[100px] pb-[30px] rounded-[20px] gap-10 relative">
        <div className="w-full">
          <h2 className="text-white text-[42px] font-extrabold leading-[42px]">
            Platos listos para disfrutar{" "}
            <strong className="text-secondary">cuando quieras</strong>
          </h2>
          <p className="text-white text-[19px] text-balance mt-6">
            En Cheffify nos preocupamos por ti, ya sea que pidas comida{" "}
            <strong>para un día</strong> o para <strong>toda una semana</strong>
            . Nosotros hacemos el trabajo duro, tú solo cocina el fin de semana
            para tus amigos o para esa cena tan especial.
          </p>
          <Link
            to="/shop"
            unstable_viewTransition
            className="bg-secondary text-white font-bold w-full rounded-full text-[17px] text-center px-12 py-4 hover:bg-primary transition-all duration-500 block mt-10"
          >
            Hacer pedido
          </Link>
        </div>
        <div className="w-full max-w-[520px] rounded-2xl overflow-hidden">
          <CarouselHome />
        </div>
        <img
          src={BgPoints}
          alt="bg-points"
          className="absolute top-6 right-10 size-16"
        />
      </div>
    </section>
  );
};

export default FourSection;
