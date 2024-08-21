import IconArrow from "@/assets/images/icons/icon-arrow-down.svg";
import CongeladoImage from "@/assets/images/img/congelado.webp";

const Ventajas = () => {
  return (
    <section
      id="ventajas"
      className="bg-secondaryLight mt-20 relative flex w-full flex-col pb-20 justify-center items-center"
    >
      <a
        href="#ventajas"
        className="relative -top-12 bg-secondaryLight rounded-full p-8 m-auto"
      >
        <img src={IconArrow} alt="Icon Arrow" className="size-8" />
      </a>
      <h2 className="text-primary text-[42px] font-extrabold text-center">
        Ventajas de los{" "}
        <strong className="text-secondary">platos congelados</strong>
      </h2>
      <div className="px-10 mt-14 flex items-center flex-col lg:flex-row lg:items-start gap-16 max-w-[1200px]">
        <img
          src={CongeladoImage}
          alt="Imagen de productos congelados"
          className="w-full max-w-[310px]"
        />
        <ul className="list-disc">
          <li className="mb-4 marker:text-primary">
            <p className="text-primary text-lg">
              <strong>Comodidad y conveniencia:</strong>Los platos congelados
              son prácticos para personas con poco tiempo para cocinar.
            </p>
          </li>
          <li className="mb-4 marker:text-primary">
            <p className="text-primary text-lg">
              <strong>Conservación de nutrientes:</strong>Al congelar los
              alimentos rápidamente, se preservan los nutrientes esenciales.
            </p>
          </li>
          <li className="mb-4 marker:text-primary">
            <p className="text-primary text-lg">
              <strong>Reducción del desperdicio de alimentos:</strong>Los platos
              congelados ayudan a evitar que los alimentos se echen a perder y
              se desperdicien.
            </p>
          </li>
          <li className="mb-4 marker:text-primary">
            <p className="text-primary text-lg">
              <strong>Amplia variedad:</strong>Existe una gran variedad de
              platos congelados disponibles para satisfacer diversos gustos y
              necesidades.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Ventajas;
