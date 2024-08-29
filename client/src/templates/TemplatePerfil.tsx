import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import HeaderInfo from "@/components/Profile/HeaderInfo";
import { Toaster } from "sonner";

const TemplatePerfil = () => {
  return (
    <main>
      <MenuNav />
      <HeaderInfo />
      <Overlay />
      <Toaster />
      <Footer />
    </main>
  );
};

export default TemplatePerfil;
