import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import HeaderInfo from "@/components/Profile/HeaderInfo";
import { useToken } from "@/hooks/useToken";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const TemplatePerfil = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { tokenHandler } = useToken();
  tokenHandler({ token }, navigate);

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
