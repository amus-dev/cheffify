import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import { usePayTransbank } from "@/hooks/usePayTransbank";
import { useEffect } from "react";

const TemplateResponseWebpay = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const { getResponseWebpay, messageResponseWebpay } = usePayTransbank();
  useEffect(() => {
    // Crear un objeto vacío para almacenar todos los parámetros
    const params: { [key: string]: string } = {};
    // Iterar sobre cada parámetro y agregarlo al objeto
    urlParams.forEach((value, key) => {
      params[key] = value;
    });
    // Obtener parametros por session
    const data = {
      ...params,
      data_webpay: JSON.parse(localStorage.getItem("data_webpay") || "{}"),
    };
    // Llamar a la función getResponseWebpay con los parámetros
    getResponseWebpay(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <MenuNav />
      <div className="px-[20px] lg:px-[60px] xl:px-[170px] mt-40 py-20">
        <h1 className="text-secondary text-4xl font-extrabold">
          {messageResponseWebpay && messageResponseWebpay}
        </h1>
      </div>
      <Footer />
    </main>
  );
};

export default TemplateResponseWebpay;
