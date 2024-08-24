import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";

const TemplateShop = () => {
  return (
    <main>
      <MenuNav />
      <h1 className="text-primary">Single del producto</h1>
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateShop;
