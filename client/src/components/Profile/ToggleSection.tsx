import { motion } from "framer-motion";
import { useState } from "react";
import MisPedidos from "./MisPedidos";
import MisDirecciones from "./MisDirecciones";

const ToggleSection = () => {
  const [isOrdersSelected, setIsOrdersSelected] = useState(true);
  const toggleSwitch = () => {
    setIsOrdersSelected(!isOrdersSelected); // Cambiamos el estado cuando hacemos clic
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative inline-flex items-center justify-between w-80 h-9 bg-separator p-1 rounded-lg cursor-pointer"
        onClick={toggleSwitch}
      >
        <div className="flex gap-6 w-full text-sm font-bold relative z-10">
          <span
            className={`transition-colors duration-300 w-1/2 text-center ${
              isOrdersSelected ? "text-primary" : "text-grayLight"
            }`}
          >
            Mis pedidos
          </span>
          <span
            className={`transition-colors duration-300 w-1/2 text-center ${
              !isOrdersSelected ? "text-primary" : "text-grayLight"
            }`}
          >
            Mis direcciones
          </span>
        </div>
        <div
          className={`absolute left-1 h-6 w-[50%] bg-white rounded-lg shadow-md transform transition-transform duration-300 ${
            isOrdersSelected ? "translate-x-0" : "translate-x-[95%]"
          }`}
        ></div>
      </div>

      {/* Content to Show/Hide with framer-motion */}
      <motion.div
        className="mt-4 w-full max-w-lg"
        key={isOrdersSelected ? "orders" : "addresses"}
        initial={{ opacity: 0, x: isOrdersSelected ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isOrdersSelected ? 100 : -100 }}
        transition={{ duration: 0.5 }}
      >
        {isOrdersSelected ? <MisPedidos /> : <MisDirecciones />}
      </motion.div>
    </div>
  );
};

export default ToggleSection;
