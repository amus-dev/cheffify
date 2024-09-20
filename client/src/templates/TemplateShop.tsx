import ArrowScrollUpButton from "@/components/Buttons/ArrowScrollUpButton";
import CarouselProducts from "@/components/Carousels/CarouselProducts";
import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import FilterProducts from "@/components/Products/FilterProducts";
import ProductsShop from "@/components/Products/ProductsShop";
import ComoFunciona from "@/components/sections/shop/ComoFunciona";
import "@/theme/shop.general.css";
import { scrollToTop } from "@/utils/functions/navigate";
import { useEffect } from "react";
import { Toaster } from "sonner";

const TemplateShop = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className="mt-28">
      <MenuNav />
      <main
        className="px-[20px] lg:px-[60px] xl:px-[170px] my-2"
        id="initialSection"
      >
        <CarouselProducts />
        <section className="mt-8 flex flex-col lg:flex-row gap-4 lg:gap-10">
          <FilterProducts />
          <ProductsShop />
        </section>
        <ComoFunciona />
      </main>
      <Overlay />
      <ArrowScrollUpButton />
      <Footer />
      <Toaster />
    </main>
  );
};

export default TemplateShop;
