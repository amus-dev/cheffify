import IconCheck from "@/assets/images/icons/check.svg";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import { showToast } from "@/utils/functions/showToast";
import { LoginFormType } from "@/utils/types/formTypes";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const loginSubmitHandler = async (
    data: LoginFormType,
    navigate: NavigateFunction
  ) => {
    setLoading(true);
    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}?action=login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const response = await result.json();

      if (result.ok) {
        localStorage.setItem("token", response.data.token);
        showToast({
          message: response.message,
          type: "success",
          icon: IconCheck,
        });
        setTimeout(() => {
          navigateWithViewTransition(navigate, "/perfil");
          setLoading(false);
        }, 3000);
      } else {
        showToast({ message: response.message, type: "error" });
      }
    } catch (error) {
      console.error("Error en el login:", error);
      showToast({ message: "Ocurrió un error inesperado", type: "error" });
    }
  };

  return { loginSubmitHandler, loading };
};
