import BannerBackground from "@/assets/images/img/banner-congelados.webp";

const Banner = () => {
  return (
    <section
      className="mx-[20px] lg:mx-[60px] xl:mx-[170px] bg-cover bg-center flex flex-col w-auto p-16 rounded-xl"
      style={{
        backgroundImage: `url(${BannerBackground})`,
      }}
    >
      <h1 className="text-[34px] font-extrabold mb-4">
        ¿Qué sabes sobre congelados?
      </h1>
      <p className="text-lg font-medium max-w-[100%] md:max-w-[65%] mb-4">
        Los platos congelados ofrecen una solución conveniente para quienes
        tienen un estilo de vida ocupado. Disfruta de delicionas comidas
        preparadas y conserva los nutrientes de forma práctica y sabrosa. Una
        opción versátil que ahorra tiempo y reduce el desperdicio de alimentos.
      </p>
      <a
        href="/#shop"
        className="bg-secondary text-white font-bold w-full sm:max-w-[240px] rounded-full text-[17px] text-center py-4 hover:bg-green transition-all duration-500"
      >
        Saber más
      </a>
    </section>
  );
};

export default Banner;
