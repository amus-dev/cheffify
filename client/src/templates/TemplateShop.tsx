import ArrowScrollUpButton from "@/components/Buttons/ArrowScrollUpButton";
import CarouselProducts from "@/components/Carousels/CarouselProducts";
import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import FilterProducts from "@/components/Products/FilterProducts";
import ProductsShop from "@/components/Products/ProductsShop";
import "@/theme/shop.general.css";

const TemplateShop = () => {
  return (
    <main>
      <MenuNav />
      <main
        className="px-[20px] lg:px-[60px] xl:px-[170px] my-2"
        id="initialSection"
      >
        <CarouselProducts />
        <section className="mt-8">
          <FilterProducts />
          <ProductsShop />
        </section>
      </main>
      <Overlay />
      <ArrowScrollUpButton />
      <Footer />
    </main>
  );
};

export default TemplateShop;
