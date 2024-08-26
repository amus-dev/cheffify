import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import LoginForm from "@/components/Session/LoginForm";

const TemplateLogin = () => {
  return (
    <main>
      <MenuNav />
      <LoginForm />
      <Footer />
      <Overlay />
    </main>
  );
};

export default TemplateLogin;
