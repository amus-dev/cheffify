import CarouselProducts from "@/components/Carousels/CarouselProducts";
import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import "@/theme/shop.general.css";

const TemplateShop = () => {
  return (
    <main>
      <MenuNav />
      <main className="px-[20px] lg:px-[60px] xl:px-[170px] my-2">
        <CarouselProducts />
      </main>
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateShop;
