import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import Overlay from "@/components/common/overlay";
import DeliveryForm from "@/components/Delivery/DeliveryForm";
import ResumeCart from "@/components/Delivery/ResumeCart";

const TemplateDelivery = () => {
  return (
    <main>
      <MenuNav />
      <section className="px-[20px] lg:px-[60px] xl:px-[170px] my-10 flex items-center justify-between">
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
