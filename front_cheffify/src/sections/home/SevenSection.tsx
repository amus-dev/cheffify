import ImageLaTercera from "@/assets/images/img/latercera.svg";
import ImageED from "@/assets/images/img/ed.svg";
import ImageElServirsen from "@/assets/images/img/elservirsen.svg";
import ImageMesa from "@/assets/images/img/mesaymantel.svg";

import PDFED from "@/assets/pdf/revista-ed.pdf";
import PDFServirsen from "@/assets/pdf/elservisen.pdf";
import PDFMesa from "@/assets/pdf/mesa-mantel.pdf";

const SevenSection = () => {
  return (
    <section className="px-[20px] lg:px-[60px] xl:px-[170px] mt-20 pb-20">
      <h2 className="text-primary text-[42px] font-extrabold text-center leading-[42px] mb-8">
        Ademas de dar de comer, <br className="hidden lg:block" />
        <strong className="text-secondary">damos de qué hablar.</strong>
      </h2>
      <ul className="flex flex-col lg:flex-row items-center justify-center w-full gap-4 lg:gap-8">
        <li>
          <a
            href="https://finde.latercera.com/comer/mjb-a-tu-mesa-delivery-cocina-rica-sano/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a la noticia de la tercera"
          >
            <img
              src={ImageLaTercera}
              alt="Imagen del logo la tercera"
              className="h-[30px] transition-all duration-500 hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href={PDFED}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a la revista ED"
          >
            <img
              src={ImageED}
              alt="Imagen del logo ED"
              className="h-[30px] transition-all duration-500 hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href={PDFServirsen}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al pdf del post @elservirsen"
          >
            <img
              src={ImageElServirsen}
              alt="Imagen del logo cuenta @elservirsen"
              className="h-[30px] transition-all duration-500 hover:scale-110"
            />
          </a>
        </li>
        <li>
          <a
            href={PDFMesa}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir al articulo de mesa y mantel"
          >
            <img
              src={ImageMesa}
              alt="Imagen del logo mesa y mantel"
              className="h-[30px] transition-all duration-500 hover:scale-110"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default SevenSection;
