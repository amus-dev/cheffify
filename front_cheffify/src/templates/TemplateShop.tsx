import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import SecondSection from "@/components/sections/home/SecondSection";

const TemplateShop = () => {
  return (
    <main>
      <MenuNav />
      <h1 className="text-primary">Single del producto</h1>
      <SecondSection />
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateShop;
