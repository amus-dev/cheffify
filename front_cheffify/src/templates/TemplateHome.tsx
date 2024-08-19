import MenuNav from "@components/Navbar/MenuNav";
import FirstSection from "@sections/home/FirstSection";
import FourSection from "@sections/home/FourSection";
import SecondSection from "@sections/home/SecondSection";
import ThirdSection from "@sections/home/ThirdSection";

const TemplateHome = () => {
  return (
    <main>
      <MenuNav />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourSection />
    </main>
  );
};

export default TemplateHome;
