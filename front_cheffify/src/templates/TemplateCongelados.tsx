import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Banner from "@/components/sections/congelados/Banner";
import ComoPreparar from "@/components/sections/congelados/ComoPreparar";
import Ventajas from "@/components/sections/congelados/Ventajas";

const TemplateCongelados = () => {
  return (
    <main>
      <MenuNav />
      <Banner />
      <Ventajas />
      <ComoPreparar />
      <Footer />
    </main>
  );
};

export default TemplateCongelados;
