const MisDirecciones = () => {
  const EMPTY_ADDRESS = true;

  return (
    <section className="flex flex-col items-center justify-center">
      <button className="flex items-center justify-center gap-4 bg-secondary w-fit rounded-[5px] text-[15px] transition-all duration-500 hover:bg-primary py-4 px-10 font-extrabold mb-4">
        Agregar dirección
      </button>
      {EMPTY_ADDRESS && (
        <p className="text-secondary font-extrabold text-lg text-center">
          No se han registrado direcciones
        </p>
      )}
    </section>
  );
};

export default MisDirecciones;
