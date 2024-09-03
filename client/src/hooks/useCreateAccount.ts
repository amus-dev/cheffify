import { useState } from "react";
import { NavigateFunction } from "react-router-dom";
import { showToast } from "@/utils/functions/showToast";
import IconCheck from "@/assets/images/icons/check.svg";
import { navigateWithViewTransition } from "@/utils/functions/navigate";

type Inputs = {
  email: string;
  name: string;
  lastName: string;
  phone: number;
  password: string;
  confirmPassword: string;
};

export const useCreateAccount = () => {
  const [loading, setLoading] = useState(false);

  const accountSubmitHandler = async (
    data: Inputs,
    navigate: NavigateFunction
  ) => {
    setLoading(true);
    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}/public/index.php?action=create`,
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
          navigateWithViewTransition(navigate, "/login");
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

  return { accountSubmitHandler, loading };
};
