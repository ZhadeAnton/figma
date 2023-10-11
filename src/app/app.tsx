import Routing from "../pages/index";
import WithProviders from "./providers";
import "./index.scss";

function App() {
  return <Routing />;
}

const AppWithProviders = WithProviders(App);

export default AppWithProviders;
