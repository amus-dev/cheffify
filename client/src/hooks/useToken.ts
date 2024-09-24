import { useFetch } from "@/hooks/useFetch";
import useUserStore from "@/stores/userStore";
import { GetTokenType } from "@/utils/types/formTypes";
import { NavigateFunction } from "react-router-dom";
import { navigateWithViewTransition } from "@/utils/functions/navigate";

export const useToken = () => {
  const { fetchData } = useFetch();
  const setUserStore = useUserStore((state) => state.setUserStore);

  const tokenHandler = (data: GetTokenType, navigate: NavigateFunction) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=getTokenData`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      onSuccess: (response) => {
        setUserStore(response.data.user);
      },
      onError: () => {
        localStorage.removeItem("token");
        navigateWithViewTransition(navigate, "/login");
      },
    });
  };

  return { tokenHandler };
};
