import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import CreateAccountForm from "@/components/Session/CreateAccountForm";
import { Toaster } from "sonner";

const TemplateCreateAccount = () => {
  return (
    <main>
      <MenuNav />
      <section className="flex justify-center my-20">
        <CreateAccountForm />
      </section>
      <Toaster />
      <Footer />
      <Overlay />
    </main>
  );
};

export default TemplateCreateAccount;
