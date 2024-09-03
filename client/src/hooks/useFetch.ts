import { useState } from "react";
import { showToast } from "@/utils/functions/showToast";

interface FetchOptions {
  method: string;
  headers: HeadersInit;
  body?: string;
}

interface UseFetchProps {
  url: string;
  options: FetchOptions;
  onSuccess: (response: any) => void;
  onError?: (error: any) => void;
}

export const useFetch = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async ({
    url,
    options,
    onSuccess,
    onError,
  }: UseFetchProps) => {
    setLoading(true);
    try {
      const result = await fetch(url, options);
      const response = await result.json();

      if (result.ok) {
        onSuccess(response);
      } else {
        showToast({ message: response.message, type: "error" });
        if (onError) onError(response);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      showToast({ message: "Ocurrió un error inesperado", type: "error" });
      if (onError) onError(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData, loading };
};
