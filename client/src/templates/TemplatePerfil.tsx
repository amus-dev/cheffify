import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import HeaderInfo from "@/components/Profile/HeaderInfo";
import { useToken } from "@/hooks/useToken";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";

const TemplatePerfil = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { tokenHandler } = useToken();

  useEffect(() => {
    tokenHandler({ token }, navigate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mt-28">
      <MenuNav />
      <HeaderInfo />
      <Overlay />
      <Toaster />
      <Footer />
    </main>
  );
};

export default TemplatePerfil;
