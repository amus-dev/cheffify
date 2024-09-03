import { useFetch } from "@/hooks/useFetch";
import { LoginFormType } from "@/utils/types/formTypes";
import { NavigateFunction } from "react-router-dom";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useLogin = () => {
  const { fetchData, loading } = useFetch();

  const loginSubmitHandler = (
    data: LoginFormType,
    navigate: NavigateFunction
  ) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=login`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      onSuccess: (response) => {
        localStorage.setItem("token", response.data.token);
        showToast({
          message: response.message,
          type: "success",
          icon: IconCheck,
        });
        setTimeout(() => {
          navigateWithViewTransition(navigate, "/perfil");
        }, 3000);
      },
    });
  };

  return { loginSubmitHandler, loading };
};
