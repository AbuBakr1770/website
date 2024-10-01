import { Box, Container } from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import image from "../../AIQ/Home-BG.png";
import Navbar from "../../components/navbar";
import { AppContext } from "../../hooks/contexts";
import ContactForm from "./Sections/ContactForm";
import ContactMap from "./Sections/ContactMap";
import HeroSectionTextContact from "./Sections/HeroSections";

export default function Contact() {
  const { control, handleSubmit } = useForm<{
    name: string;
    email: string;
    message: string;
  }>();

  const navbarContext = useContext(AppContext);
  const ContainerRef = useRef<HTMLDivElement>(null);
  return (
    <>
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
        <HeroSectionTextContact />
      </Container>
      <ContactForm />
      <ContactMap />
    </>
  );
}
