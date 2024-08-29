import IconLogOut from "@/assets/images/icons/icon-logout.svg";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate("/");
      });
    } else {
      // Fallback si viewTransition no está disponible
      navigate("/");
    }
  };

  return (
    token && (
      <button onClick={logOut}>
        <img
          src={IconLogOut}
          alt="Icono para cerrar sesión"
          className="size-8"
        />
      </button>
    )
  );
};

export default LogOutButton;
