import { Container, Divider, Heading, HStack, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import hybridApp from "../../../images/hybridapp.svg";
import logoDesign from "../../../images/logo design.svg";
import uiuxdesign from "../../../images/uiux.svg";
import webDevelopment from "../../../images/webdevelopment.svg";
import wordpress from "../../../images/wordpress.svg";
import ExpertiseItem from "../components/expertise-item";
import ScrollLeftSVG from "./../../../images/scroll-left.png";
import ScrollRightSVG from "./../../../images/scroll-right.svg";
export default function OurExperties() {
  const cats = [
    {
      image: webDevelopment,
      title: "Web Development",
      description:
        "Create dynamic and engaging experiences with our responsive carousels. Perfect for showcasing your content seamlessly across all devices.",
    },
    {
      image: uiuxdesign,
      title: "UI/UX Design",
      description:
        "Elevate your user experience with our intuitive and visually appealing UI/UX designs. Enhance usability and delight your users with seamless interactions.",
    },
    {
      image: hybridApp,
      title: "Hybrid App",
      description:
        "Achieve top-notch performance and consistency with our expertly crafted hybrid apps. Enjoy the best of both worlds with seamless functionality across all platforms.",
    },
    {
      image: wordpress,
      title: "Wordpress",
      description:
        "Transform your website with our expertly designed WordPress solutions. Enjoy robust, scalable, and user-friendly sites tailored to your needs.",
    },
    {
      image: logoDesign,
      title: "Dogital Marketing",
      description:
        "Boost your online presence with our cutting-edge digital marketing strategies. Drive traffic, increase engagement, and achieve measurable results.",
    },
  ];
  return (
    <Container my="40" maxW={"container.xl"}>
      <Heading color="primary.600" fontSize="40px" px="50">
        Our Expertise
      </Heading>
      <HStack
        overflowX="scroll"
        className="no-scrollbar"
        marginTop="20px"
        px="50"
      >
        <Swiper
          slidesPerView={2}
          freeMode={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 120,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 100,
            },
          }}
        >
          {cats.map((value) => (
            <SwiperSlide style={{ marginRight: "15px", marginLeft: "15px" }}>
              <ExpertiseItem
                image={value.image}
                title={value.title}
                description={value.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </HStack>
      <HStack my="20px" px="50">
        <Image src={ScrollLeftSVG} w="60px" />

        <Image src={ScrollRightSVG} w="60px" />

        <Divider borderBottomWidth="5px" borderColor="border.primary" />
      </HStack>
    </Container>
  );
}
