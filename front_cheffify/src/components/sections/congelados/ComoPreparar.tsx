import IconArrow from "@/assets/images/icons/icon-arrow-down.svg";
import BannerPreparacion from "@/assets/images/img/congelados-preparacion.webp";

const ComoPreparar = () => {
  return (
    <section
      id="preparacion"
      className="flex w-full flex-col px-[40px] lg:px-[60px] xl:px-[170px] pb-10"
    >
      <a
        href="#preparacion"
        className="relative -top-12 bg-white rounded-full p-8 m-auto"
      >
        <img src={IconArrow} alt="Icon Arrow" className="size-8" />
      </a>
      <h2 className="text-primary text-[42px] font-extrabold text-center">
        ¿Cómo Preparar?
      </h2>

      <ul className="list-disc mt-10">
        <li className="mb-8 marker:text-primary">
          <p className="text-primary text-balance">
            <strong>Microondas:</strong>Uno de los modos más rápidos y
            convenientes. Simplemente coloca el plato congelado en el microondas
            siguiendo las instrucciones del envase o la receta. Asegúrate de
            remover cualquier envoltorio metálico y cubre la comida con una
            tapadera o film transparente para mantener la humedad. Calienta en
            intervalos cortos para evitar que se recaliente y revuelve
            ocasionalmente para obtener cocción uniforme.
          </p>
        </li>
        <li className="mb-8 marker:text-primary">
          <p className="text-primary text-balance">
            <strong>Horno convencional:</strong>Esta opción es ideal para platos
            que necesitan una cocción más lenta y crujiente, como pizzas,
            empanadas o lasañas. Precalienta el horno a la temperatura indicada
            en el envase y coloca el plato congelado directamente en la bandeja
            del horno o en un recipiente apto para horno. Sigue las
            instrucciones de tiempo y temperatura para lograr un resultado
            delicioso y dorado.
          </p>
        </li>
        <li className="mb-8 marker:text-primary">
          <p className="text-primary text-balance">
            <strong>Estufa o sartén:</strong>Utiliza este método para platos que
            requieren salteado o cocción en sartén, como salteados de verduras o
            fideos. Vierte una pequeña cantidad de aceite o agua en el sartén y
            calientalo a fuego medio. Agrega el plato congelado y cocina,
            removiendo constantemente hasta que esté completamente caliente.
          </p>
        </li>
      </ul>

      <img
        className="w-full"
        src={BannerPreparacion}
        alt="Banner ilustrativa de platos congelados"
      />
    </section>
  );
};

export default ComoPreparar;
