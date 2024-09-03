import useUserStore from "@/stores/userStore";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import { GetTokenType } from "@/utils/types/formTypes";
import { NavigateFunction } from "react-router-dom";

export const useToken = () => {
  const setUserStore = useUserStore((state) => state.setUserStore);
  const tokenHandler = async (
    data: GetTokenType,
    navigate: NavigateFunction
  ) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_API_URL}?action=getTokenData`,
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
        const {
          data: { user },
        } = response;

        setUserStore(user);
      } else {
        navigateWithViewTransition(navigate, "/login");
      }
    } catch (error) {
      console.error("Error en el login:", error);
      navigateWithViewTransition(navigate, "/login");
    }
  };

  return { tokenHandler };
};
