import IconCarta from "@/assets/images/icons/icon-carta.svg";
import { PRODUCTS } from "@/config/database.products";
import CardProductHome from "@/components/Products/CardProductHome";

const ProductsShop = () => {
  return (
    <div className="flex flex-col w-full items-start justify-start pb-10">
      <div className="flex items-center justify-between border-b border-b-separator pb-6 w-full">
        <div className="flex items-center gap-3">
          <img src={IconCarta} className="size-5" />
          <h2 className="text-primary font-bold text-xl">Nuestra Carta</h2>
        </div>
        <span className="text-primary">Ordenar por</span>
      </div>
      <div className="grid mt-10 gap-14 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 z-10">
        {PRODUCTS.map(({ id, slug, title, description, price, image, alt }) => (
          <CardProductHome
            key={id}
            id={id}
            slug={slug}
            title={title}
            description={description}
            price={price}
            image={image}
            alt={alt}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsShop;
