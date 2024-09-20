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

const FilterProducts = () => {
  // Hacemos una copia del array de categorías y lo usamos como estado
  const [categories, setCategories] = useState(CATEGORIES);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  const [filterPrice, setFilterPrice] = useState([
    getMinOrMaxValuePrice("min"),
    getMinOrMaxValuePrice("max"),
  ]);
  const filterProductsByCategory = useCartStore(
    (state) => state.filterProductsByCategory
  );

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleClickFilter = (slug: string) => {
    // Actualizamos el estado de las categorías, activando solo la seleccionada
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
    console.log(price);
  };

  return (
    <div className="flex flex-col w-full max-w-[250px]">
      <div className="flex gap-2 items-center border-b border-b-separator pb-6">
        <img src={IconFilter} alt="Icon Filter" className="size-5" />
        <h2 className="text-primary font-bold text-xl">Filtrar</h2>
      </div>
      <div className="border border-gray-300 rounded mt-6">
        <button
          className="flex justify-between items-center w-full bg-gray-200 cursor-pointer text-primary font-black text-start uppercase text-[14px] border-b border-b-separator pb-2"
          onClick={() => toggleAccordion(1)}
        >
          <span>Categoría</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-700 ${
              activeIndex === 1 ? "rotate-180" : "rotate-0"
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
            activeIndex === 1 ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="pt-4">
            {categories.map(({ id, name, slug, icon, active }) => (
              <li
                className="text-secondary text-lg flex justify-between relative group mb-2"
                key={id}
              >
                <button
                  className="flex items-center gap-3"
                  onClick={() => handleClickFilter(slug)}
                >
                  <img src={icon} alt="" className="size-5" />
                  <span className="text-[16px]">{name}</span>
                </button>
                {active && (
                  <img src={IconCheck} alt="Active Icon" className="size-5" />
                )}
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-700"></span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border border-gray-300 rounded mt-6">
        <button
          className="flex justify-between items-center w-full bg-gray-200 cursor-pointer text-primary font-black text-start uppercase text-[14px] border-b border-b-separator pb-2"
          onClick={() => toggleAccordion(1)}
        >
          <span>Precio</span>
          <svg
            className={`w-5 h-5 transform transition-transform duration-700 ${
              activeIndex === 1 ? "rotate-180" : "rotate-0"
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
            <span className="text-secondary text-[15px]">
              {formatPriceCLP(filterPrice[0])}
            </span>
            <span className="text-secondary text-[15px]">
              {formatPriceCLP(filterPrice[1])}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
