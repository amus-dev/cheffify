import IconEdit from "@/assets/images/icons/icon-edit.svg";
import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import { useState } from "react";

const MisDirecciones = () => {
  const EMPTY_ADDRESS = false;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <section className="flex flex-col justify-center">
      <button
        className="block mx-auto gap-4 bg-secondary w-fit rounded-[5px] text-[15px] transition-all duration-500 hover:bg-primary py-4 px-10 font-extrabold mb-4"
        onClick={openModal}
      >
        Agregar dirección
      </button>
      {EMPTY_ADDRESS ? (
        <p className="text-secondary font-extrabold text-lg text-center">
          No se han registrado direcciones
        </p>
      ) : (
        <div className="flex mt-10">
          <article className="shadow-card-shadow p-4 rounded-xl w-full max-w-sm">
            <div className="flex justify-between items-center mb-6">
              <h5 className="text-primary font-extrabold text-lg">Casa</h5>
              <div className="flex items-center gap-2">
                <button>
                  <img
                    src={IconEdit}
                    alt="Editar dirección"
                    className="size-4 transition-all duration-500 hover:scale-110"
                  />
                </button>
                <button>
                  <img
                    src={IconTrash}
                    alt="Editar dirección"
                    className="size-4 transition-all duration-500 hover:scale-110"
                  />
                </button>
              </div>
            </div>
            <p className="text-primary text-sm">Vasco</p>
            <p className="text-primary text-sm">La Granja</p>
          </article>
        </div>
      )}
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
          onClick={closeModal} // Para cerrar el modal al hacer clic fuera
        >
          <div
            className="bg-white p-8 rounded-lg shadow-lg relative animate-fade-in"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
          >
            <h2 className="text-2xl font-bold mb-4">This is a Modal</h2>
            <p className="mb-4">You can add any content you like here.</p>
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MisDirecciones;
