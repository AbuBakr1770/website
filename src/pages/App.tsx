import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import "swiper/css";
import Footer from "../components/footer";
import { AppContext } from "../hooks/contexts";
import theme from "../themes/light";
import About from "./about/about";
import "./App.css";
import Contact from "./contact/contact";
import Home from "./home/home";
import Portfolio from "./portfolio/portfolio";
import Services from "./services/services";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider
        value={{
          Navbarheight: 0,
        }}
      >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </ChakraProvider>
  );
}
