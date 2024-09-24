import { useAddress } from "@/hooks/useAddress";
import { COMUNAS } from "@/utils/const/address";
import { InputsAddressForm } from "@/utils/types/formTypes";
import { SubmitHandler, useForm } from "react-hook-form";
import Loader from "@/components/common/Loader";

interface ModalAddressProps {
  setIsOpen: (value: boolean) => void;
}

const ModalAddress = ({ setIsOpen }: ModalAddressProps) => {
  const { saveAddress, loading } = useAddress();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsAddressForm>();

  const onSubmit: SubmitHandler<InputsAddressForm> = async (data) => {
    const response = {
      ...data,
      token: localStorage.getItem("token"),
    };
    saveAddress(response, setIsOpen);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
      onClick={() => setIsOpen(false)} // Para cerrar el modal al hacer clic fuera
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg relative animate-fade-in"
        onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-primary">Datos de dirección</h2>
          <button
            className="text-secondary font-extrabold text-lg transition-colors duration-500 hover:text-primary"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full max-w-lg"
        >
          <input
            id="name"
            type="name"
            {...register("name", {
              required: "El nombre es requerido",
            })}
            className="bg-bgInput text-colorInput font-extrabold text-[13px] p-2 w-full rounded-md h-[46px]"
            placeholder="Nombre"
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
          <input
            id="address"
            type="address"
            {...register("address", {
              required: "El nombre es requerido",
            })}
            className="bg-bgInput text-colorInput font-extrabold text-[13px] p-2 w-full rounded-md h-[46px]"
            placeholder="Dirección"
          />
          {errors.address && (
            <span className="text-red-600 text-sm">
              {errors.address.message}
            </span>
          )}
          <select
            id="comuna"
            className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
            {...register("comuna", { required: "La comuna es requerida" })}
          >
            {COMUNAS.map((comuna, index) => (
              <option key={index} value={comuna.value}>
                {comuna.label}
              </option>
            ))}
          </select>
          {errors.comuna && (
            <span className="text-red-600 text-sm">
              {errors.comuna.message}
            </span>
          )}
          {loading ? (
            <Loader />
          ) : (
            <input
              type="submit"
              value="Guardar dirección"
              className="bg-secondary text-white font-bold w-full rounded-md text-[17px] px-12 py-4 hover:bg-primary transition-all duration-500 cursor-pointer"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default ModalAddress;
