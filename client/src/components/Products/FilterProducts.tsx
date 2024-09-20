import IconCheck from "@/assets/images/icons/icon-check.svg";
import IconFilter from "@/assets/images/icons/icon-filter.svg";
import { CATEGORIES } from "@/config/data.category.products";
import useCartStore from "@/stores/productsStore";
import {
  formatPriceCLP,
  getMinOrMaxValuePrice,
} from "@/utils/functions/products";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FilterProducts = () => {
  const [categories, setCategories] = useState(CATEGORIES);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [filterPrice, setFilterPrice] = useState([
    getMinOrMaxValuePrice("min"),
    getMinOrMaxValuePrice("max"),
  ]);

  const filterProductsByCategory = useCartStore(
    (state) => state.filterProductsByCategory
  );

  const filterProductsByPrice = useCartStore(
    (state) => state.filterProductsByPrice
  );

  const handleClickFilter = (slug: string) => {
    const updatedCategories = categories.map((category) =>
      category.slug === slug
        ? { ...category, active: true }
        : { ...category, active: false }
    );
    setCategories(updatedCategories);
    filterProductsByCategory(slug);
  };

  const filterByPrice = (price: number[]) => {
    setFilterPrice(price);
    filterProductsByPrice(price);
  };

  return (
    <div className="flex flex-col w-full lg:max-w-[250px]">
      <div className="flex gap-2 items-center border-b border-b-separator pb-6">
        <img src={IconFilter} alt="Icon Filter" className="w-6 h-6" />
        <h2 className="text-primary font-bold text-xl">Filtrar</h2>
      </div>

      {/* Acordeón de Categoría */}
      <div className="border border-gray-300 rounded mt-6">
        <button
          className="flex justify-between items-center w-full bg-gray-200 cursor-pointer text-primary font-black text-start uppercase text-sm md:text-[14px] border-b border-b-separator pb-2"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <span>Categoría</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-700 ${
              isCategoryOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isCategoryOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="pt-4">
            {categories.map(({ id, name, slug, icon, active }) => (
              <li
                key={id}
                className="text-secondary text-sm md:text-lg flex justify-between relative group mb-2"
              >
                <button
                  className="flex items-center gap-3"
                  onClick={() => handleClickFilter(slug)}
                >
                  <img src={icon} alt="" className="w-5 h-5" />
                  <span className="text-[14px] md:text-[16px]">{name}</span>
                </button>

                {/* Icono Check animado con Framer Motion */}
                <AnimatePresence>
                  {active && (
                    <motion.img
                      src={IconCheck}
                      alt="Active Icon"
                      className="w-5 h-5"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Acordeón de Precio */}
      <div className="border border-gray-300 rounded mt-6">
        <button
          className="flex justify-between items-center w-full bg-gray-200 cursor-pointer text-primary font-black text-start uppercase text-sm md:text-[14px] border-b border-b-separator pb-2"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          <span>Precio</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-700 ${
              isPriceOpen ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isPriceOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="mt-4">
            <Slider
              range
              allowCross={false}
              defaultValue={[
                getMinOrMaxValuePrice("min"),
                getMinOrMaxValuePrice("max"),
              ]}
              min={getMinOrMaxValuePrice("min")}
              max={getMinOrMaxValuePrice("max")}
              value={filterPrice}
              onChange={(price) => filterByPrice(price as number[])}
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-secondary text-sm md:text-[15px]">
                {formatPriceCLP(filterPrice[0])}
              </span>
              <span className="text-secondary text-sm md:text-[15px]">
                {formatPriceCLP(filterPrice[1])}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
