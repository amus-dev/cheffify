import IconEdit from "@/assets/images/icons/icon-edit.svg";
import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import { useEffect, useState } from "react";
import ModalAddress from "@/components/common/modals/ModalAddress";
import { useAddress } from "@/hooks/useAddress";
import { Address } from "@/utils/types/formTypes";

const MisDirecciones = () => {
  const { getAllAddress } = useAddress();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [address, setAddress] = useState<Address[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getAllAddress(token, setAddress);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(address);
  }, [address]);

  return (
    <section className="flex flex-col justify-center">
      <button
        className="block mx-auto gap-4 bg-secondary w-fit rounded-[5px] text-[15px] transition-all duration-500 hover:bg-primary py-4 px-10 font-extrabold mb-4"
        onClick={() => setIsOpen(true)}
      >
        Agregar dirección
      </button>
      {address.length === 0 ? (
        <p className="text-secondary font-extrabold text-lg text-center">
          No se han registrado direcciones
        </p>
      ) : (
        <div className="flex mt-10 gap-8 items-center justify-center">
          {address.map(({ address, comuna, id, id_user, name }, index) => (
            <article
              className="shadow-card-shadow p-4 rounded-xl w-full max-w-sm"
              key={index}
            >
              <div className="flex justify-between items-center mb-6">
                <h5 className="text-primary font-extrabold text-lg">{name}</h5>
                <div className="flex items-center gap-2">
                  <button onClick={() => console.log(id_user)}>
                    <img
                      src={IconEdit}
                      alt="Editar dirección"
                      className="size-4 transition-all duration-500 hover:scale-110"
                    />
                  </button>
                  <button onClick={() => console.log(id)}>
                    <img
                      src={IconTrash}
                      alt="Editar dirección"
                      className="size-4 transition-all duration-500 hover:scale-110"
                    />
                  </button>
                </div>
              </div>
              <p className="text-primary text-sm">{address}</p>
              <p className="text-primary text-sm">{comuna}</p>
            </article>
          ))}
        </div>
      )}
      {/* Modal */}
      {isOpen && <ModalAddress setIsOpen={setIsOpen} />}
    </section>
  );
};

export default MisDirecciones;
