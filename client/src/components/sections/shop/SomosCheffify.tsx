import IconTrigo from "@/assets/images/icons/icon-trigo.svg";
import IconChef from "@/assets/images/icons/icon-hatcheff.svg";
import IconCasa from "@/assets/images/icons/icon-casa.svg";

const SomosCheffify = () => {
  return (
    <section className="flex flex-col my-10">
      <h2 className="text-primary text-3xl font-extrabold">
        Somos <strong className="text-secondary">Cheffify</strong>
      </h2>
      <div className="flex flex-col lg:flex-row gap-4 mt-4">
        <article className="shadow-card-shadow rounded-xl p-14">
          <img src={IconTrigo} className="size-10 mb-4" />
          <h3 className="text-primary font-bold mb-4">
            Los mejores ingredientes
          </h3>
          <p className="text-primary text-sm text-balance">
            En Cheffify nos preocupamos por tu salud y la de los tuyos, por eso
            ponemos todo nuestro empeño en adquirir los mejores productos de
            proveedores comprometidos y con nuestra misma visión.
          </p>
        </article>
        <article className="shadow-card-shadow rounded-xl p-14">
          <img src={IconChef} className="size-10 mb-4" />
          <h3 className="text-primary font-bold mb-4">Nuestros Chefs</h3>
          <p className="text-primary text-sm text-balance">
            Trabajamos con profesionales que llevan a nuestro lado más de una
            década, personas que más que trabajadores, ya son familia. Ponemos
            nuestra mano en el “fogón” por ellos.
          </p>
        </article>
        <article className="shadow-card-shadow rounded-xl p-14">
          <img src={IconCasa} className="size-10 mb-4" />
          <h3 className="text-primary font-bold mb-4">Directo a tu casa</h3>
          <p className="text-primary text-sm text-balance">
            La eficiencia de nuestros envases respeta la cadena de frío para
            asegurarnos de que todos nuestros productos lleguen en buen estado a
            la mesa de tu casa (o allá donde estés).
          </p>
        </article>
      </div>
    </section>
  );
};

export default SomosCheffify;
