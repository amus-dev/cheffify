import { useFetch } from "@/hooks/useFetch";
import { UpdatePhoneType } from "@/utils/types/formTypes";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useUpdatePhone = () => {
  const { fetchData, loading } = useFetch();

  const updatePhoneHandler = (data: UpdatePhoneType) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=updatePhone`,
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
      },
    });
  };

  return { updatePhoneHandler, loading };
};
