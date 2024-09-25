import IconEdit from "@/assets/images/icons/icon-edit.svg";
import IconTrash from "@/assets/images/icons/icon-trash-color.svg";
import ModalAddress from "@/components/common/modals/ModalAddress";
import { useAddress } from "@/hooks/useAddress";
import useUserStore from "@/stores/userStore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay between each child animation
    },
  },
};

const MisDirecciones = () => {
  const token = localStorage.getItem("token");
  const { getAllAddress, deleteAddress } = useAddress();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const userAddress = useUserStore((state) => state.address);
  const setAddressStore = useUserStore((state) => state.setAddressStore);

  useEffect(() => {
    const fetchAddresses = async () => {
      if (token) {
        const result = await getAllAddress(token);
        setAddressStore(result);
      }
    };
    fetchAddresses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDeleteAddress = async (id_address: number) => {
    if (token) {
      const result = await deleteAddress(token, id_address);
      console.log(result);
    }
  };

  return (
    <section className="flex flex-col justify-center">
      <button
        className="block mx-auto gap-4 bg-secondary w-fit rounded-[5px] text-[15px] transition-all duration-500 hover:bg-primary py-4 px-10 font-extrabold mb-4"
        onClick={() => setIsOpen(true)}
      >
        Agregar dirección
      </button>
      {userAddress?.length === 0 ? (
        <p className="text-secondary font-extrabold text-lg text-center">
          No se han registrado direcciones
        </p>
      ) : (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 justify-items-center"
          variants={gridVariants}
          initial="hidden"
          animate="visible"
        >
          {userAddress?.map(({ address, comuna, id, id_user, name }, index) => (
            <motion.article
              className="shadow-card-shadow p-4 rounded-xl w-full max-w-sm"
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }} // Add hover effect
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
                  <button onClick={() => handleDeleteAddress(id)}>
                    <img
                      src={IconTrash}
                      alt="Eliminar dirección"
                      className="size-4 transition-all duration-500 hover:scale-110"
                    />
                  </button>
                </div>
              </div>
              <p className="text-primary text-sm">{address}</p>
              <p className="text-primary text-sm">{comuna}</p>
            </motion.article>
          ))}
        </motion.div>
      )}
      {/* Modal */}
      {isOpen && <ModalAddress setIsOpen={setIsOpen} />}
    </section>
  );
};

export default MisDirecciones;
