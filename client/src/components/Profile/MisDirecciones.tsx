import IconEdit from "@/assets/images/icons/icon-edit.svg";
import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import { useState } from "react";
import ModalAddress from "@/components/common/modals/ModalAddress";

const MisDirecciones = () => {
  const EMPTY_ADDRESS = false;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex flex-col justify-center">
      <button
        className="block mx-auto gap-4 bg-secondary w-fit rounded-[5px] text-[15px] transition-all duration-500 hover:bg-primary py-4 px-10 font-extrabold mb-4"
        onClick={() => setIsOpen(true)}
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
      {isOpen && <ModalAddress setIsOpen={setIsOpen} />}
    </section>
  );
};

export default MisDirecciones;
