import StarIcon from "@assets/icons/star.svg";
import HeartIcon from "@assets/icons/hearth.svg";
import SnowFlakeIcon from "@assets/icons/snowflake.svg";

const MENU_ITEMS = [
  {
    text: "Servicios",
    url: "/#comidaGourmet",
    alt: "Icono de estrella para servicios",
    ariaLabel: "Icono de estrella que te lleva a la sección servicios",
    icon: StarIcon,
    ancla: true,
  },
  {
    alt: "Icono de corazón para Somos lo que comemos",
    ariaLabel:
      "Icono de corazón que te lleva a la sección Somos lo que comemos",
    text: "Somos lo que comemos",
    url: "/#somos",
    icon: HeartIcon,
    ancla: true,
  },
  {
    icon: SnowFlakeIcon,
    alt: "Icono de nieve para congelados",
    ariaLabel: "Icono de nieve que te lleva a la sección congelados",
    text: "Congelados",
    url: "/congelados",
    ancla: false,
  },
];

export { MENU_ITEMS };
