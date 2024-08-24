import { filterProductBySlug } from "@/utils/functions/products";
import { Product } from "@/utils/types/productTypes";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProductCard = () => {
  const { productSlug } = useParams() as { productSlug: string };
  const [productFiltered, setProductFiltered] = useState<Product | null>(null);

  useEffect(() => {
    setProductFiltered(filterProductBySlug(productSlug));
  }, [productSlug]);

  return (
    <section className="px-4 w-full flex items-center justify-center mt-14">
      <div className="w-full max-w-[1170px] shadow-card-shadow p-6 rounded-xl flex flex-col md:flex-row gap-8">
        <div>
          <img
            src={productFiltered?.image}
            alt={`Imagen representativa del producto ${productFiltered?.title}`}
            className="rounded-md w-full block"
          />
        </div>
        <div>
          <div className="flex justify-between mb-8">
            <Link
              to="/shop"
              unstable_viewTransition
              className="bg-gray text-grayLight py-2 px-4 rounded-md font-medium transition-all duration-500 hover:bg-green hover:text-white"
            >
              Volver
            </Link>
            <a href="">info</a>
          </div>
          <div>
            <h1 className="text-primary text-[22px] font-bold">
              {productFiltered?.title}{" "}
              <span className="text-secondary text-[22px] font-normal">
                - {productFiltered?.category}
              </span>
            </h1>
            <p className="text-[17px] text-balance text-grayCart mt-6 leading-[24px] font-medium">
              {productFiltered?.descriptionLarge}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;
