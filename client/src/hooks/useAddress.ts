import { useFetch } from "@/hooks/useFetch";
import { InputsAddressForm } from "@/utils/types/formTypes";
import IconCheck from "@/assets/images/icons/check.svg";
import { showToast } from "@/utils/functions/showToast";

export const useAddress = () => {
  const { loading } = useFetch();

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

  const saveAddress = async (
    data: InputsAddressForm,
    setIsOpen: (value: boolean) => void
  ) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?action=saveAddress`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status === 200) {
        showToast({
          message: result.message,
          type: "success",
          icon: IconCheck,
        });
        setIsOpen(false);
        return result.status;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAddress = async (token: string, id_address: number) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?action=deleteAddress`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token, id_address }),
        }
      );
      const result = await response.json();
      if (result.status === 200) {
        showToast({
          message: result.message,
          type: "success",
          icon: IconCheck,
        });
        return result.status;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { saveAddress, loading, getAllAddress, deleteAddress };
};
