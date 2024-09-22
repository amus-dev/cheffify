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
        window.location.href = response.data;
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
      },
      onError: (error) => {
        setMessageResponseWebpay(error.message);
      },
    });
  };

  return { transactionUser, loading, getResponseWebpay, messageResponseWebpay };
};
