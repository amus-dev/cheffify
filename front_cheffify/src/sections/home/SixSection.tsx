import FirstUser from "@assets/images/img/user-1.svg";
import SecondUser from "@assets/images/img/user-2.svg";
import ThirdUser from "@assets/images/img/user-3.svg";

const SixSection = () => {
  return (
    <section className="px-[20px] lg:px-[60px] xl:px-[170px]">
      <div className="shadow-card-shadow rounded-xl py-10 px-20">
        <h2 className="text-primary text-[42px] font-extrabold text-center leading-[42px] mb-8">
          Guatita llena,{" "}
          <strong className="text-secondary">corazón contento.</strong>
        </h2>
        <p className="text-primary text-center text-[19px]">
          Porque sabemos lo importante de tener referencias, no hay mejor aval
          que la <br /> opinión de nuestros clientes. Aquí verás algunos de sus
          comentarios.
        </p>
        <div className="flex flex-col lg:flex-row items-center justify-center mt-16 gap-4">
          <article className="w-full flex flex-col items-center">
            <img
              src={FirstUser}
              alt="Imagen ilustrativa del comentario del primer usuario"
              className="aspect-square size-16"
            />
            <h5 className="text-primary text-[18px] font-bold mt-4">
              Moisés Andrade
            </h5>
            <p className="text-balance text-center text-primary text-[16px] mt-4">
              Los sabores de Cheffify me transportaron a un momento mágico de la
              infancia, donde saboreaba la cocina de mi madre y mis abuelas. Es
              sorprendete cómo sus platos logran ese efecto.
            </p>
          </article>
          <article className="w-full flex flex-col items-center">
            <img
              src={SecondUser}
              alt="Imagen ilustrativa del comentario del primer usuario"
              className="aspect-square size-16"
            />
            <h5 className="text-primary text-[18px] font-bold mt-4">
              Maida Larraín
            </h5>
            <p className="text-balance text-center text-primary text-[16px] mt-4">
              Cheffify me soluciona el día a día de las comidas de mis hijos
              para el colegio. Rápido, económico y variado. Nunca repetimos
              plato. Sé que la salud de mi familia está en buenas manos.
            </p>
          </article>
          <article className="w-full flex flex-col items-center">
            <img
              src={ThirdUser}
              alt="Imagen ilustrativa del comentario del primer usuario"
              className="aspect-square size-16"
            />
            <h5 className="text-primary text-[18px] font-bold mt-4">
              Adriana Bustamante
            </h5>
            <p className="text-balance text-center text-primary text-[16px] mt-4">
              Algo que no tiene precio es llegar a mi departamento despues de un
              lago día de trabajo y no tener que pensar en qué cocinar. Soy
              buena en la cocina, pero eso lo dejo para los fines de semana
              junto a mi pololo y amigos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SixSection;
