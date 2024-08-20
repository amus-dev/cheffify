import MenuNav from "@components/Navbar/MenuNav";
import FirstSection from "@sections/home/FirstSection";
import FiveSection from "@sections/home/FiveSection";
import FourSection from "@sections/home/FourSection";
import SecondSection from "@sections/home/SecondSection";
import SevenSection from "@sections/home/SevenSection";
import SixSection from "@sections/home/SixSection";
import ThirdSection from "@sections/home/ThirdSection";

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
    </main>
  );
};

export default TemplateHome;
