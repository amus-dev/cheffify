import IconShop from "@/assets/images/icons/bag.svg";
import IconCheck from "@/assets/images/icons/check.svg";
import IconFile from "@/assets/images/icons/icon-file.svg";
import InfoFile from "@/assets/pdf/informacion_nutricional.pdf";
import useCartStore from "@/stores/productsStore";
import {
  filterProductBySlug,
  formatPriceCLP,
} from "@/utils/functions/products";
import { showSuccessToast } from "@/utils/functions/showToast";
import { Product } from "@/utils/types/productTypes";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProductCard = () => {
  const { productSlug } = useParams() as { productSlug: string };
  const [productFiltered, setProductFiltered] = useState<Product | null>(null);

  const [quantity, setQuantity] = useState(1);
  const addProduct = useCartStore((state) => state.addProduct);

  useEffect(() => {
    setProductFiltered(filterProductBySlug(productSlug));
  }, [productSlug]);

  const addProductToCart = () => {
    if (productFiltered) {
      addProduct({
        id: productFiltered.id,
        slug: productFiltered.slug,
        title: productFiltered.title,
        description: productFiltered.description,
        price: productFiltered.price,
        image: productFiltered.image,
        alt: productFiltered.alt,
        quantity: quantity,
      });
      showSuccessToast({
        message: "Producto agregado al carrito",
        icon: IconCheck,
      });
    }
  };

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
            <a
              href={InfoFile}
              target="_blank"
              rel="noopener noreferrer"
              className="flex bg-gray items-center justify-center gap-2 py-2 px-4 rounded-md text-grayLight transition-all duration-500 hover:bg-green hover:text-white"
            >
              <img
                src={IconFile}
                alt="Icono de archivo para descargar información nutricional"
                className="size-5"
              />
              <span>Info Nutricional</span>
            </a>
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
          <p className="text-primary text-[19px] font-bold mt-4">
            {productFiltered && formatPriceCLP(productFiltered.price)}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div className="flex items-center rounded-[5px] border border-secondary w-full max-w-[70px]">
              <span className="px-[10px] text-[17px] font-bold text-secondary">
                {quantity}
              </span>
              <div className="flex flex-col justify-center w-full border-l border-secondary overflow-hidden">
                <button
                  className="text-secondary font-semibold text-[16px] transition-all duration-500 hover:bg-primary hover:text-white rounded-tr-[4px]"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
                <button
                  className="text-secondary font-semibold text-[16px] transition-all duration-500 hover:bg-primary hover:text-white rounded-br-[4px]"
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <button
              className="flex items-center justify-center gap-4 bg-secondary w-full max-w-[170px] rounded-[5px] text-[15px] font-medium transition-all duration-500 hover:bg-primary py-3"
              onClick={addProductToCart}
            >
              Agregar{" "}
              <img
                src={IconShop}
                className="size-4"
                alt="Icono de bolsa para agregar productos"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProductCard;
