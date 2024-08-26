import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import { Toaster } from "sonner";

const TemplatePerfil = () => {
  return (
    <main>
      <MenuNav />
      <Overlay />
      <Toaster />
      <Footer />
    </main>
  );
};

export default TemplatePerfil;
