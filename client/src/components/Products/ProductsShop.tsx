import IconSelect from "@/assets/images/icons/arrow-select.svg";
import IconCarta from "@/assets/images/icons/icon-carta.svg";
import CardProductHome from "@/components/Products/CardProductHome";
import useCartStore from "@/stores/productsStore";
import { useState } from "react";
import { motion } from "framer-motion";

const ProductsShop = () => {
  const productsFilter = useCartStore((state) => state.productsFilter);

  // Estado para manejar el número de productos visibles
  const [visibleProducts, setVisibleProducts] = useState(6); // Mostrar 8 productos inicialmente

  // Función para cargar más productos
  const handleLoadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + 8); // Incrementar el número de productos en 8
  };

  return (
    <div className="flex flex-col w-full items-start justify-start pb-10">
      <div className="flex items-center justify-between border-b border-b-separator pb-6 w-full">
        <div className="flex items-center gap-3">
          <img src={IconCarta} className="size-5" />
          <h2 className="text-primary font-bold text-xl">Nuestra Carta</h2>
        </div>
        <select
          name=""
          id=""
          className={`border-none bg-bgInput rounded-[17px] w-full max-w-[200px] h-[34px] text-[12px] text-primary font-extrabold px-[20px] appearance-none bg-no-repeat bg-[length:10px] bg-right-[10%] bg-center bg-[url(${IconSelect})]`}
        >
          <option value="">Ordenar por</option>
          <option value="asc">Precio (de bajo a alto)</option>
          <option value="desc">Precio (de alto a bajo)</option>
        </select>
      </div>
      <motion.div
        className="grid mt-10 gap-14 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 z-10"
        layout
      >
        {/* Mostrar solo los productos visibles */}
        {productsFilter
          .slice(0, visibleProducts)
          .map(({ id, slug, title, description, price, image, alt }) => (
            <motion.div
              key={id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <CardProductHome
                id={id}
                slug={slug}
                title={title}
                description={description}
                price={price}
                image={image}
                alt={alt}
              />
            </motion.div>
          ))}
      </motion.div>

      {/* Mostrar el botón solo si hay más productos para cargar */}
      {visibleProducts < productsFilter.length && (
        <button
          onClick={handleLoadMore}
          className="font-extrabold mt-8 border border-primary px-8 py-2 bg-white text-primary rounded-full self-center flex items-center gap-2 justify-between text-[22px] transition-all hover:bg-primary hover:text-white duration-500"
        >
          Cargar más
          <span className="text-[30px]">+</span>
        </button>
      )}
    </div>
  );
};

export default ProductsShop;
