import IconLogOut from "@/assets/images/icons/icon-logout.svg";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    navigateWithViewTransition(navigate, "/");
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
