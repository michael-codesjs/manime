import { Box, VStack } from "@chakra-ui/react";
import PopularAnime from "../popular-anime";



export default function SidePanel() {


  return (
    <VStack
      as={"aside"}
      gridArea={"side-panel"}
      px={6}
      justify={"start"}
      spacing={8}
      borderLeftWidth={{
        base: "0px",
        md: "1px"
      }}
      overflowY={"scroll"}
    >
      <Box
        width={"full"}
        height={"full"}
        p={0}
        id={"popuplar-anime-portal-container-side-panel"}
        // popular animes are rendered here via a portal on large devices
      />   
    </VStack>
  )

}