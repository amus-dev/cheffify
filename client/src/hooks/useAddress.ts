import { useFetch } from "@/hooks/useFetch";
import { InputsAddressForm } from "@/utils/types/formTypes";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useAddress = () => {
  const { fetchData, loading } = useFetch();

  const getAllAddress = async (token: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}?action=getAddress`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(token), // Pass the token properly as an object
      }
    );

    const data = await response.json(); // Ensure you're getting JSON data
    return data.data;
  };

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

  return { saveAddress, loading, getAllAddress };
};
