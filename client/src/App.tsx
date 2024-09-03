import Routes from "@/routes/route";
import { HelmetProvider } from "react-helmet-async";
const App = () => {
  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  );
};

export default App;
