import { useFetch } from "@/hooks/useFetch";
import { AccountFormType } from "@/utils/types/formTypes";
import { NavigateFunction } from "react-router-dom";
import { navigateWithViewTransition } from "@/utils/functions/navigate";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useCreateAccount = () => {
  const { fetchData, loading } = useFetch();

  const accountSubmitHandler = (
    data: AccountFormType,
    navigate: NavigateFunction
  ) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=create`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      onSuccess: (response) => {
        showToast({
          message: response.message,
          type: "success",
          icon: IconCheck,
        });
        setTimeout(() => {
          navigateWithViewTransition(navigate, "/login");
        }, 3000);
      },
    });
  };

  return { accountSubmitHandler, loading };
};
