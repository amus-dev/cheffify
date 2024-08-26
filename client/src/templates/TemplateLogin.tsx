import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import LoginForm from "@/components/Session/LoginForm";
import { Toaster } from "sonner";

const TemplateLogin = () => {
  return (
    <main>
      <MenuNav />
      <section className="flex justify-center my-20">
        <LoginForm />
      </section>
      <Toaster />
      <Footer />
      <Overlay />
    </main>
  );
};

export default TemplateLogin;
