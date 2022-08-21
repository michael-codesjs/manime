import {
  Box,
  Grid,
  useColorModeValue
} from "@chakra-ui/react";
import "./index.css";
import Header from "./layout/header";
import Navigation from "./layout/navigation";
import PopularAnime from "./layout/popular-anime";
// import PopularAnime from "./layout/popular-anime/popular-anime";
import SidePanel from "./layout/side-panel";
import Routes from "./Routes";


export default function App() {

  return (

    <Grid
      width={"100vw"}
      gridTemplateAreas={{
        base: `
          "header"
          "main"
          "nav"
          "side-panel"
        `,
        sm: `
          "header header header"
          "nav main main"
          "side-panel side-panel side-panel"
        `,
        md: `
          "header header header"
          "nav main side-panel"
        `
      }}
      gridTemplateColumns={{
        base: "100%",
        sm: "3fr 5fr",
        md: "200px 1fr 320px"
      }}
      gridTemplateRows={{
        base: "min-content 1fr",
        sm: "min-content 1fr",
        md: "min-content 1fr"
      }}
      height={"100vh"}
      bg={useColorModeValue("white", "gray.900")}
    >

      <Header />
      <Navigation />
      <Routes /> {/* main-content */}
      <SidePanel />
      <PopularAnime />

    </Grid>

  )


}