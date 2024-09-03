import { useCreateAccount } from "@/hooks/useCreateAccount";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/components/common/Loader";

type Inputs = {
  email: string;
  name: string;
  lastName: string;
  phone: number;
  password: string;
  confirmPassword: string;
};

const CreateAccountForm = () => {
  const navigate = useNavigate();
  const { accountSubmitHandler, loading } = useCreateAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    accountSubmitHandler(data, navigate);
  };

  // Obtenemos el valor del campo password para la validación
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full md:max-w-[470px] px-10"
    >
      <input
        id="email"
        type="email"
        {...register("email", {
          required: "El correo eléctronico es requerido",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Email"
      />
      {errors.email && (
        <span className="text-red-600 text-sm">{errors.email.message}</span>
      )}

      <input
        id="name"
        type="name"
        {...register("name", {
          required: "El nombre es requerido",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Nombre"
      />
      {errors.name && (
        <span className="text-red-600 text-sm">{errors.name.message}</span>
      )}

      <input
        id="lastName"
        type="lastName"
        {...register("lastName", {
          required: "El apellido es requerido",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Apellido"
      />
      {errors.lastName && (
        <span className="text-red-600 text-sm">{errors.lastName.message}</span>
      )}

      <input
        id="phone"
        type="phone"
        {...register("phone", {
          required: "El celular es requerido",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Celular"
      />
      {errors.phone && (
        <span className="text-red-600 text-sm">{errors.phone.message}</span>
      )}

      <input
        id="password"
        type="password"
        {...register("password", {
          required: "La contraseña es requerida",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Password"
      />
      {errors.password && (
        <span className="text-red-600 text-sm">{errors.password.message}</span>
      )}

      <input
        id="confirmPassword"
        type="password"
        {...register("confirmPassword", {
          required: "La contraseña es requerida",
          validate: (value) =>
            value === password || "Las contraseñas no coinciden",
        })}
        className="bg-bgInput text-colorInput font-bold text-[13px] p-2 w-full rounded-md h-[46px]"
        placeholder="Repetir Contraseña"
      />
      {errors.confirmPassword && (
        <span className="text-red-600 text-sm">
          {errors.confirmPassword.message}
        </span>
      )}

      <div className="flex flex-col justify-center gap-2 items-center">
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            value="Crear cuenta"
            className="bg-secondary text-white font-extrabold w-full rounded-md text-[17px] px-12 py-4 hover:bg-primary transition-all duration-500 cursor-pointer"
          />
        )}
        <Link
          to="/login"
          unstable_viewTransition
          className="text-secondary transition-colors duration-500 hover:text-primary"
        >
          Iniciar sesión
        </Link>
      </div>
    </form>
  );
};

export default CreateAccountForm;
