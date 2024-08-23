import Footer from "@/components/common/footer";
import MenuNav from "@/components/common/navbar/MenuNav";
import FirstSection from "@/components/sections/home/FirstSection";
import FiveSection from "@/components/sections/home/FiveSection";
import FourSection from "@/components/sections/home/FourSection";
import SecondSection from "@/components/sections/home/SecondSection";
import SevenSection from "@/components/sections/home/SevenSection";
import SixSection from "@/components/sections/home/SixSection";
import ThirdSection from "@/components/sections/home/ThirdSection";

import { Toaster } from "sonner";

const TemplateHome = () => {
  return (
    <main>
      <MenuNav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
      <FiveSection />
      <SixSection />
      <SevenSection />
      <Footer />
      <Toaster />
    </main>
  );
};

export default TemplateHome;
