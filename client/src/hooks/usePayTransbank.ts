import { useFetch } from "@/hooks/useFetch";
import { UserOrder } from "@/utils/types/formTypes";
// import { NavigateFunction } from "react-router-dom";
// import { navigateWithViewTransition } from "@/utils/functions/navigate";
// import IconCheck from "@/assets/images/icons/check.svg";
// import { showToast } from "@/utils/functions/showToast";

export const usePayTransbank = () => {
  const { fetchData, loading } = useFetch();

  const transactionUser = (data: UserOrder) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=transaction`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      onSuccess: (response) => {
        console.log(response);
        window.location.href = response.data;
        //    localStorage.setItem("token", response.data.token);
        //    showToast({
        //      message: response.message,
        //      type: "success",
        //      icon: IconCheck,
        //    });
        //    setTimeout(() => {
        //      navigateWithViewTransition(navigate, "/perfil");
        //    }, 3000);
      },
    });
  };

  return { transactionUser, loading };
};
