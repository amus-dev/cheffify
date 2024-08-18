import StarIcon from "../../assets/images/icons/star.svg";
import HeartIcon from "../../assets/images/icons/heart.svg";
import SnowFlakeIcon from "../../assets/images/icons/snowflake.svg";

const MENU_ITEMS = [
  {
    text: "Servicios",
    url: "#services",
    alt: "Icono de estrella para servicios",
    ariaLabel: "Icono de estrella que te lleva a la sección servicios",
    icon: StarIcon,
  },
  {
    alt: "Icono de corazón para Somos lo que comemos",
    ariaLabel:
      "Icono de corazón que te lleva a la sección Somos lo que comemos",
    text: "Somos lo que comemos",
    url: "#comemos",
    icon: HeartIcon,
  },
  {
    icon: SnowFlakeIcon,
    alt: "Icono de nieve para congelados",
    ariaLabel: "Icono de nieve que te lleva a la sección congelados",
    text: "Congelados",
    url: "/congelados",
  },
];

export { MENU_ITEMS };
