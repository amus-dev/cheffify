import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import Banner from "@/components/sections/congelados/Banner";
import ComoPreparar from "@/components/sections/congelados/ComoPreparar";
import Ventajas from "@/components/sections/congelados/Ventajas";

const TemplateCongelados = () => {
  return (
    <main className="mt-28">
      <MenuNav />
      <Banner />
      <Ventajas />
      <ComoPreparar />
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateCongelados;
