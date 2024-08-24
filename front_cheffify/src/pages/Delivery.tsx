import useCartStore from "@/stores/productsStore";
import TemplateDelivery from "@/templates/TemplateDelivery";
import { Navigate } from "react-router-dom";

const Delivery = () => {
  const products = useCartStore((state) => state.products);

  if (products.length === 0) {
    return <Navigate to="/" />;
  }
  return <TemplateDelivery />;
};

export default Delivery;
