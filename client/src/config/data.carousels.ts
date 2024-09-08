import SlideArroz from "@/assets/images/img/slide-arroz.webp";
import IconArroz from "@/assets/images/icons/iconos_arroz_slider.svg";
import SlideCrema from "@/assets/images/img/slideCrema.webp";
import IconTallarin from "@/assets/images/icons/icon-tallarines.svg";
import SlidePorotos from "@/assets/images/img/slidePorotos.webp";
import IconTomate from "@/assets/images/icons/icon-tomate.svg";

export const dataCarouselsShop = [
  {
    id: 1,
    title: "Sabores del mundo en arroz",
    description:
      "Descubre el auténtico sabor de los arroces internacionales, conservados a la perfección con la mejor técnica de congelación y entregados directamente a tu mesa a través de nuestro eficaz delivery.",
    image: SlideArroz,
    icon: IconArroz,
    buttonText: "¡A comer!",
    buttonBackground: "bg-secondary",
    buttonBackgroundHover: "bg-green",
    buttonTextColor: "text-white",
    buttonTextColorHover: "text-white",
    link: "",
    color: "text-lightBeige",
  },
  {
    id: 2,
    title: "Platos preparados a domicilio",
    description:
      "Platos caseros que llegan directamente a tu mesa con todas sus propiedades y con el frescor de su sabor natural gracias a un eficiente proceso de congelado y cadena de distribución.",
    image: SlideCrema,
    icon: IconTallarin,
    buttonText: "¡A comer!",
    buttonBackground: "bg-white",
    buttonBackgroundHover: "bg-green",
    buttonTextColor: "text-primary",
    buttonTextColorHover: "text-white",
    link: "",
    color: "text-primary",
  },
  {
    id: 3,
    title: "Comida casera directamente a tu mesa",
    description:
      "La vistosidad y atractivo de nuestros platos radica en el color de sus ingredientes, cuidadosamente seleccionados para lograr en nuestras recetas un penetrante olor y sabor inigualables.",
    image: SlidePorotos,
    icon: IconTomate,
    buttonText: "¡Me dio hambre!",
    buttonBackground: "bg-secondary",
    buttonBackgroundHover: "bg-green",
    buttonTextColor: "text-white",
    buttonTextColorHover: "text-white",
    link: "",
    color: "text-white",
  },
];
