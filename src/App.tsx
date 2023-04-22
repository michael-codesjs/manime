import "./index.css";
import { Header } from "@layout/header";
import Navigation from "./layout/navigation";
import SidePanel from "./layout/side-panel";
import Routes from "./routes";

export const App: React.FC = () => (
  <div id="app">
    <Header />
    <Routes />
    <Navigation />
    <SidePanel />
  </div>
);