import IconArrowUp from "@/assets/images/icons/arrow-up.svg";

const ArrowScrollUpButton = () => {
  return (
    <a
      href="#initialSection"
      aria-label="Boton que te lleva al inicio de la pagina"
      className="fixed bottom-4 bg-secondary  right-4 md:right-20 rounded-full p-1 transition-all duration-500 hover:bg-green z-[11]"
    >
      <img
        src={IconArrowUp}
        alt="Icono de flecha hacia arriba"
        className="size-10"
      />
    </a>
  );
};

export default ArrowScrollUpButton;
