import { Box, Container } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import image from "../../AIQ/Home-BG.png";
import Navbar from "../../components/navbar";
import { AppContext } from "../../hooks/contexts";
import SecondndSection from "./sections/2ndSection";
import ThirdSection from "./sections/3rdSection";
import ForthSection from "./sections/4thSection";
import FifthSection from "./sections/5thSection";
import SixthSection from "./sections/6thSection";
import HeroSectionText from "./sections/HeroSectionText";
export default function Home() {
  const navbarContext = useContext(AppContext);
  const ContainerRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      <Container
        maxW="100%"
        className="123456789"
        h={`calc(100vh - ${navbarContext.Navbarheight}px)`}
        backgroundImage={image}
        backgroundSize={"cover"}
        // backgroundImage={image}
        position="relative"
        ref={ContainerRef}
        overflow="hidden"
      >
        <Navbar />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(81, 102, 127, 0.7)" // Custom blue shade with opacity
          zIndex={1} // Ensure the overlay is on top of the background image
        />
        <HeroSectionText />
      </Container>
      <SecondndSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <ThirdSection />
      {/* <WhyHawklix /> */}
      {/* <OurExperties /> */}
      {/* <Portfolio /> */}
      {/* <Clients /> */}
      {/* <GetInTouch /> */}
    </Box>
  );
}
