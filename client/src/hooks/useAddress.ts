import { useFetch } from "@/hooks/useFetch";
import { InputsAddressForm } from "@/utils/types/formTypes";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useAddress = () => {
  const { fetchData, loading } = useFetch();

  const saveAddress = (
    data: InputsAddressForm,
    setIsOpen: (value: boolean) => void
  ) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=saveAddress`,
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
        setIsOpen(false);
      },
    });
  };

  return { saveAddress, loading };
};
