import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import SingleProductCard from "@/components/Products/SingleProductCard";
import SecondSection from "@/components/sections/home/SecondSection";

const TemplateSingleProduct = () => {
  return (
    <main>
      <MenuNav />
      <SingleProductCard />
      <SecondSection />
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateSingleProduct;
