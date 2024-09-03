import IconCheck from "@/assets/images/icons/check.svg";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import { showToast } from "@/utils/functions/showToast";
import { AccountFormType } from "@/utils/types/formTypes";
import { useState } from "react";
import { NavigateFunction } from "react-router-dom";

export const useCreateAccount = () => {
  const [loading, setLoading] = useState(false);

  const accountSubmitHandler = async (
    data: AccountFormType,
    navigate: NavigateFunction
  ) => {
    setLoading(true);
    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}?action=create`,
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
        setLoading(false);
        showToast({ message: response.message, type: "error" });
      }
    } catch (error) {
      console.error("Error en el login:", error);
      setLoading(false);
      showToast({ message: "Ocurrió un error inesperado", type: "error" });
    }
  };

  return { accountSubmitHandler, loading };
};
