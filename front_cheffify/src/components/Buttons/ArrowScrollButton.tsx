interface ArrowScrollButtonProps {
  url: string;
}

import IconArrowDown from "@assets/images/icons/icon-arrow-down.svg";

const ArrowScrollButton = ({ url }: ArrowScrollButtonProps) => {
  return (
    <a
      href={url}
      aria-label="Al hacer click te avanzará a la siguiente sección"
    >
      <img
        src={IconArrowDown}
        alt="Icono flecha hacia abajo"
        className="size-16 shadow-arrow rounded-full p-4 transition-all duration-500 hover:scale-110"
      />
    </a>
  );
};

export default ArrowScrollButton;
