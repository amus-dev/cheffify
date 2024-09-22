import { useForm, SubmitHandler } from "react-hook-form";
import useCartStore from "@/stores/productsStore";
import { usePayTransbank } from "@/hooks/usePayTransbank";
import Loader from "@/components/common/Loader";
import { DELIVERY } from "@/utils/const/products";

type Inputs = {
  address: string;
  name: string;
  lastName: string;
  email: string;
  comuna: string;
  phone: number;
};

const DeliveryForm = () => {
  const productsBag = useCartStore((state) => state.productsBag);
  const totalPriceBag = useCartStore((state) => state.totalPriceBag());

  const { transactionUser, loading } = usePayTransbank();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const dataCompleteToPay = {
      ...data,
      products: productsBag,
      amount: totalPriceBag + DELIVERY,
      idUser: 0,
    };

    transactionUser(dataCompleteToPay);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full md:max-w-[370px]"
    >
      <input
        id="address"
        {...register("address", { required: "La dirección es requerida" })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Dirección"
      />
      {errors.address && (
        <span className="text-red-600 text-sm">{errors.address.message}</span>
      )}

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="flex flex-col w-full">
          <input
            id="name"
            {...register("name", { required: "El nombre es requerido" })}
            className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
            placeholder="Nombre"
          />
          {errors.name && (
            <span className="text-red-600 text-sm">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col w-full">
          <input
            id="lastName"
            {...register("lastName", { required: "El apellido es requerido" })}
            className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
            placeholder="Apellidos"
          />
          {errors.lastName && (
            <span className="text-red-600 text-sm">
              {errors.lastName.message}
            </span>
          )}
        </div>
      </div>

      <input
        id="email"
        {...register("email", {
          required: "El correo electrónico es requerido",
          pattern: {
            value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "El formato del correo es inválido",
          },
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-600 text-sm">{errors.email.message}</span>
      )}

      <input
        id="comuna"
        {...register("comuna", { required: "La comuna es requerida" })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Comuna"
      />
      {errors.comuna && (
        <span className="text-red-600 text-sm">{errors.comuna.message}</span>
      )}

      <input
        id="phone"
        type="tel"
        {...register("phone", {
          required: "El teléfono es requerido",
          pattern: {
            value: /^[0-9]{9}$/,
            message: "El formato del teléfono es inválido",
          },
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Teléfono"
      />
      {errors.phone && (
        <span className="text-red-600 text-sm">{errors.phone.message}</span>
      )}

      <div>
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            value="Finalizar con WebPay"
            className="bg-secondary text-white font-bold w-full rounded-md text-[17px] px-12 py-4 hover:bg-primary transition-all duration-500 cursor-pointer"
          />
        )}
      </div>
    </form>
  );
};

export default DeliveryForm;
