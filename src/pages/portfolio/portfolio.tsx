import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Fragment } from "react";
import GetInTouch from "../home/sections/get-in-touch";

export default function Portfolio() {
  const portfolioItems = [
    {
      label: "Naplozz",
      description:
        "Naplozz is a quality management and data tracking application utilizing the innovative technology of the blockchain to help businesses function more efficiently",
      service: "Web Development",
      image: require("../../images/webdevelopment.svg").default,
    },
  ];
  return (
    <Fragment>
      <Container maxW="container.xl">
        <VStack mb="50" spacing="30">
          <VStack p="70">
            <Heading maxW="750px" textAlign="center" color="primary.700">
              Projects We/ve Delivered
            </Heading>
            <Text
              maxW="950px"
              textAlign="justify"
              fontWeight="medium"
              fontSize="xl"
            >
              Over the past 10 years, we have designed and built a wide range if
              high-quality products from scratch. Our team has finished various
              web and mobile apps related to various spheres including
              e-learning, healthcare, e-commerce, advertising, augmented
              reality, action sports, finance and sharing economy. Check out our
              portfolio to see the projects we have delivered.
            </Text>
          </VStack>
          {portfolioItems.map((item, index) => (
            <HStack
              bgColor={index % 2 === 0 ? "gray.100" : "secondary.100"}
              w="full"
              borderRadius="3xl"
              p="14"
              spacing={5}
              align="center"
            >
              <VStack align="flex-start" spacing={5}>
                <Heading>{item.label}</Heading>
                <Text fontSize="lg">{item.description}</Text>
                <Image src={item.image} />
              </VStack>
              <VStack>
                <Image
                  src="https://picsum.photos/700/400"
                  w="650px"
                  h="200px"
                  rounded="2xl"
                />
              </VStack>
            </HStack>
          ))}
        </VStack>
        <Box mx="56">
          <GetInTouch />
        </Box>
      </Container>
    </Fragment>
  );
}
