import { useFetch } from "@/hooks/useFetch";
import { UserOrder } from "@/utils/types/formTypes";
import { useState } from "react";

export const usePayTransbank = () => {
  const { fetchData, loading } = useFetch();
  const [messageResponseWebpay, setMessageResponseWebpay] = useState("");

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
        localStorage.setItem("data_webpay", JSON.stringify(response.data));
        window.location.href = response.data.url;
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getResponseWebpay = (data: any) => {
    fetchData({
      url: `${import.meta.env.VITE_API_URL}?action=responseWebpay`,
      options: {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
      onSuccess: (response) => {
        setMessageResponseWebpay(response.message);
        localStorage.removeItem("data_webpay");
      },
      onError: (error) => {
        setMessageResponseWebpay(error.message);
      },
    });
  };

  return { transactionUser, loading, getResponseWebpay, messageResponseWebpay };
};
