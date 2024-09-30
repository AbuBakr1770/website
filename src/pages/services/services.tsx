import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import GetInTouch from "../home/sections/get-in-touch";

export default function Services() {
  const servicesItems = [
    {
      label: "Web Development",
      description:
        "Our web development services include a wide range of solutions to help you establish and enhance your online presence. From custom website design and development to e-commerce solutions, we have the expertise to create a website that is tailored to your specific needs and goals. We also offer website maintenance and updates to ensure that your site stays up-to-date and runs smoothly. With our web development services, you can rest assured that your website will be professional, functional, and effective.",
      image: require("../../images/webdevelopment.svg").default,
    },
    {
      label: "UI/UX Design",
      description:
        "Our UI/UX design services focus on creating user-centered designs that enhance the overall experience of your website or application. We specialize in creating visually appealing and intuitive interfaces that are easy to navigate and use. Our team of experienced designers will work with you to understand your business goals and target audience, and then create a design that meets their needs and expectations. We cover all the aspects of UI/UX design such as wireframes, mockups, prototyping, testing, and user research. Our goal is to create designs that not only look great but also improve conversions, user satisfaction, and loyalty.",
      image: require("../../images/uiux.svg").default,
    },
    {
      label: "Hybrid App",
      description:
        "Unlock the full potential of your mobile strategy with our hybrid app solutions. We build high-performance apps that offer a native-like experience across multiple platforms, ensuring consistent functionality and design. Our approach combines speed and efficiency with extensive customization to meet your specific needs. With CodeCync, you’ll achieve a seamless and scalable app that stands out in a competitive market.",
      image: require("../../images/hybridapp.svg").default,
    },
    {
      label: "Digital Marketing",
      description:
        "Elevate your brand’s online presence with our comprehensive digital marketing services. We craft data-driven strategies that enhance visibility, drive targeted traffic, and boost engagement across all channels. From SEO and content creation to social media and PPC campaigns, our approach is tailored to deliver measurable results and maximize your ROI. Partner with us to transform your digital landscape and achieve your marketing goals.",
      image: require("../../images/logo design.svg").default,
    },
    {
      label: "Wordpress",
      description:
        "Transform your website with our expert WordPress development services. We create highly functional, scalable, and visually stunning sites tailored to your unique needs. Our solutions ensure a seamless user experience, easy content management, and robust performance. With CodeCync, your WordPress site will stand out and drive engagement effectively.",
      image: require("../../images/wordpress.svg").default,
    },
  ];
  return (
    <Fragment>
      <Container maxWidth="container.xl" mb="50">
        <Center w="100%" py="20">
          <Heading maxWidth="70%" textAlign="center" color="primary.700">
            We offer a full suite of web solutions to help your business thrive
            online.
          </Heading>
        </Center>
        {servicesItems.map((item, index) => (
          <VStack
            bgColor={index % 2 === 0 ? "gray.100" : "secondary.100"}
            w="full"
            borderRadius="3xl"
            p="14"
            mb="10"
            spacing={5}
          >
            <HStack justify="space-between" w="full">
              <Box flex={1}>
                <Heading color="primary.700">{item.label}</Heading>
              </Box>
              <HStack flex={1} justify="center">
                <Box
                  borderWidth="1px"
                  borderStyle="dashed"
                  borderColor="secondary.500"
                  maxW="300px"
                  w="full"
                />
              </HStack>
              <HStack flex={1} justifyContent="flex-end">
                <Image src={item.image} />
              </HStack>
            </HStack>
            <Text fontSize="lg">{item.description}</Text>
          </VStack>
        ))}
      </Container>
      <Box mx="56">
        <GetInTouch />
      </Box>
    </Fragment>
  );
}
