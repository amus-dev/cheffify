import Routes from "@/routes/index";
import { HelmetProvider } from "react-helmet-async";
const App = () => {
  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  );
};

export default App;
