import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import DeliveryForm from "@/components/Delivery/DeliveryForm";
import ResumeCart from "@/components/Delivery/ResumeCart";
import { scrollToTop } from "@/utils/functions/navigate";
import { useEffect } from "react";

const TemplateDelivery = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <main className="mt-28">
      <MenuNav />
      <section className="px-[20px] lg:px-[60px] xl:px-[170px] my-10 flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-40 xl:gap-60">
        <div>
          <h1 className="text-[19px] text-primary font-bold mb-4">
            Dirección de envío
          </h1>
          <DeliveryForm />
        </div>
        <div>
          <ResumeCart />
        </div>
      </section>
      <Overlay />
      <Footer />
    </main>
  );
};

export default TemplateDelivery;
