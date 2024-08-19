import AboutImage from "@assets/images/img/us.webp";
import ImageEat from "@assets/images/img/come.svg";

const FiveSection = () => {
  return (
    <section
      className="flex flex-col-reverse lg:flex-row w-full px-[20px] lg:px-[60px] xl:px-[170px] pb-28 mt-20 justify-between"
      id="somos"
    >
      <div className="w-full">
        <img src={AboutImage} alt="Imagen fundadores de Cheffify" />
      </div>
      <div className="flex flex-col w-full">
        <h2 className="text-primary text-[42px] font-extrabold mb-6">
          Somos <strong className="text-secondary">lo que comemos</strong>
        </h2>
        <p className="text-primary text-[19px] text-balance mb-6 font-medium">
          <strong>¡Pasión y amor!</strong> esa es la base de nuestra cocina.
          Puede sonar a tópico, pero es exactamente nuestra razón de ser y de
          sentir. Así nos lo ha enseñado línea a línea, párrafo a párrafo,
          nuestro cuaderno familiar de recetas, heredado de generación en
          generación y cuyo legado aún se mantiene vigente y que las hermanas
          Biancani se han encargado de perpetuar.
        </p>
        <p className="text-primary text-[19px] text-balance mb-6 font-medium">
          Esta <strong>“Biblia culinaria”</strong>, escrita por nuestras madres
          y abuelas, se encarga de mantener la tradición familiar, enseñándonos
          que en los detalles está la diferencia.
        </p>
        <p className="text-primary text-[19px] text-balance font-medium">
          Nuestra vasta experiencia entregando un servicio de excelencia en
          distintos comedores escolares en Chile y tras recibir el
          reconocimiento de diversas instituciones, nos lleva a expandirnos y
          compartir nuestro conocimiento culinario ancestral hasta la mesa de tu
          hogar, tu oficina o allá donde te encuentres. Come como en casa.
        </p>
        <img
          src={ImageEat}
          alt="Imagen logo de Come como en casa"
          className="w-full max-w-[260px] mt-10"
        />
      </div>
    </section>
  );
};

export default FiveSection;
