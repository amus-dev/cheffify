import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";
import { UpdatePhoneType } from "@/utils/types/formTypes";
import { useState } from "react";

export const useUpdatePhone = () => {
  const [loading, setLoading] = useState(false);

  const updatePhoneHandler = async (data: UpdatePhoneType) => {
    setLoading(true);
    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}?action=updatePhone`,
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

  return { updatePhoneHandler, loading };
};
