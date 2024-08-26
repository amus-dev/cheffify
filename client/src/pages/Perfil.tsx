import TemplatePerfil from "@/templates/TemplatePerfil";
import { Navigate } from "react-router-dom";

const Perfil = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return <TemplatePerfil />;
};

export default Perfil;
