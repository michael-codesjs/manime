import {
  Grid,
} from "@chakra-ui/react";
import "./index.css";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import SidePanel from "./layout/side-panel";
import Routes from "./Routes";


export default function App() {

  return (
    <Grid
      width="100vw"
      minHeight="100vh"
      gridTemplateAreas={{
        base: `
          "header"
          "main"
          "navigation"
          "side-panel"
        `,
        sm: `
          "header header header"
          "navigation main main"
          "side-panel side-panel side-panel"
        `,
        md: `
          "header header header"
          "navigation main side-panel"
        `
      }}
      gridTemplateColumns={{
        base: "100%",
        sm: "230px 1fr",
        md: "230px 1fr 320px"
      }}
      gridTemplateRows={{
        base: "min-content repeat(3,auto)",
        sm: "min-content auto 0px",
        md: "min-content auto"
      }}
    >
      <SidePanel /> {/* this should be rendered before any other components that make use of its portal containers.*/}
      <Header />
      <Routes />
      <Navigation />

    </Grid>
  )

}