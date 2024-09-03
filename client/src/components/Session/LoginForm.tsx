import { useLogin } from "@/hooks/useLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loader from "@/components/common/Loader";

type Inputs = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginSubmitHandler, loading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) =>
    loginSubmitHandler(data, navigate);

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

      <div className="flex flex-col justify-center gap-2 items-center">
        {loading ? (
          <Loader />
        ) : (
          <input
            type="submit"
            value="Login"
            className="bg-secondary text-white font-bold w-full rounded-md text-[17px] px-12 py-4 hover:bg-primary transition-all duration-500 cursor-pointer"
          />
        )}
        <Link
          to="/crear-cuenta"
          unstable_viewTransition
          className="text-secondary transition-colors duration-500 hover:text-primary"
        >
          Crear cuenta
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
