import {
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import WhyHawklixImage from "./../../../images/why-hawklix.svg";

export default function WhyHawklix() {
  return (
    <Container my="40" maxW="container.xl">
      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        justify="space-between"
        spacing={50}
      >
        <Box
          boxSize={{
            md: "200px",
            xs: "300px",
          }}
          minBlockSize="400px"
          alignSelf="center"
          flex={1}
          as={Center}
        >
          <Image src={WhyHawklixImage} maxWidth="350" />
        </Box>
        <Center>
          <VStack
            flex={1}
            align="start"
            p={{
              // md: "100px",
              xs: "20px",
            }}
            maxW={{
              md: "700px",
              xs: "100%",
            }}
          >
            <Heading
              color="primary.600"
              fontSize={{
                md: "40px",
                xs: "30px",
              }}
              textAlign="left"
            >
              Why Code
              <Text as="span" color="secondary.500">
                C
              </Text>
              ync{" "}
              <Text as="span" color="secondary.500">
                ?
              </Text>
            </Heading>
            <Text fontSize={{ md: "18px", xs: "14px" }} textAlign="justify">
              <>
                At CodeCync, we streamline software development to deliver
                exceptional results. Our dedicated team combines deep expertise
                with a personalized approach, crafting custom solutions tailored
                to your unique needs. With CodeCync, you'll enjoy seamless
                collaboration, dependable outcomes, and a trustworthy partner at
                every stage of your project. Choose CodeCync for efficient,
                effective, and professional software solutions that drive your
                success
              </>
            </Text>
          </VStack>
        </Center>
      </Stack>
    </Container>
  );
}
