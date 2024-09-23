import IconCheck from "@/assets/images/icons/check.svg";
import IconLogOut from "@/assets/images/icons/icon-logout.svg";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import { showToast } from "@/utils/functions/showToast";
import { useNavigate } from "react-router-dom";

const LogOutButton = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    showToast({
      message: "Haz cerrado sesión correctamente",
      type: "success",
      icon: IconCheck,
    });
    setTimeout(() => navigateWithViewTransition(navigate, "/"), 2000);
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
