import TemplateHome from "@templates/TemplateHome";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Comida congelada a domicilio | Platos Congelados Cheffify</title>
        <meta
          name="description"
          content="Platos saludables y deliciosos, preparados y congelados para tu comodidad. ¡Disfruta de comida casera sin el trabajo de cocinar!"
        />
      </Helmet>
      <TemplateHome />
    </>
  );
};

export default Home;
