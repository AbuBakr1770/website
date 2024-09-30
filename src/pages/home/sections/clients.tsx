import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import quoteIcon from "../../../images/Icon awesome-quote-left.svg";
import customerIcon from "../../../images/user1.jpeg";

export default function Clients() {
  const testimonials = [
    {
      photoURL: "https://via.placeholder.com/150",
      name: "John Doe",
      testimonial: (
        <>
          CodeCync has been a game-changer for our business! Their team not only
          delivered a flawless software solution but also went above and beyond
          to understand our unique requirements. Working with them was a breeze,
          and the results speak for themselves. Highly recommended!
        </>
      ),
    },
    {
      photoURL: "https://via.placeholder.com/150",
      name: "John Doe",
      testimonial: (
        <>
          Choosing CodeCync was one of the best decisions we made for our
          project. Their professionalism, attention to detail, and commitment to
          excellence were evident from day one. They listened to our needs,
          provided insightful suggestions, and delivered a product that exceeded
          our expectations. We're thrilled with the outcome and look forward to
          future collaborations.
        </>
      ),
    },
    {
      photoURL: "https://via.placeholder.com/150",
      name: "John Do12e",
      testimonial: (
        <>
          We can't thank the team at CodeCync enough for their exceptional work.
          From the initial consultation to the final product launch, they
          demonstrated a level of dedication and expertise that truly sets them
          apart. Their seamless communication, efficient project management, and
          top-notch deliverables have made them our go-to partner for all our
          software development needs. Trustworthy, reliable, and highly skilled
          – we couldn't ask for more
        </>
      ),
    },
  ];

  const [selectedTestomonial, setSelectedTestomonial] = useState(0);

  const controls = useAnimationControls();

  function handleTestimonialClick(index: number) {
    controls.start({
      opacity: 0,
    });

    setTimeout(() => {
      setSelectedTestomonial(index);
      controls.start({
        opacity: 1,
      });
    }, 300);
  }

  return (
    <Container maxW={"container.xl"} my="40">
      <Stack
        direction={{
          xs: "column-reverse",
          lg: "row",
        }}
        alignItems="center"
        spacing="100"
      >
        <Box boxSize="450px" borderWidth={2} borderRadius="xl">
          <motion.div
            animate={controls}
            style={{
              width: "100%",
              height: "90%",
            }}
          >
            <VStack p="5">
              <HStack justify="space-between" w="100%">
                <Image src={quoteIcon} boxSize="70px" />
                <Image rounded="full" src={customerIcon} boxSize="120px" />
              </HStack>
              <Text textAlign="justify" w="full" h="100%" noOfLines={10}>
                {testimonials?.[selectedTestomonial]?.testimonial}
              </Text>
            </VStack>
          </motion.div>

          <HStack justify="center">
            {testimonials.map((testimonial, index) => (
              <Box
                boxSize={3}
                backgroundColor={
                  index === selectedTestomonial ? "secondary.500" : "gray.400"
                }
                borderRadius="full"
                _hover={{
                  backgroundColor: "secondary.500",
                }}
                cursor="pointer"
                onClick={() => handleTestimonialClick(index)}
              />
            ))}
          </HStack>
        </Box>

        <VStack maxW="600px" alignItems="flex-start">
          <Heading color="primary.600">What Our Clients Have to Say</Heading>
          <Text>
            Our clients consistently praise us for delivering top-notch quality
            and innovative solutions. They appreciate our commitment to
            excellence, seamless collaboration, and reliable results. With
            CodeCync, you can expect outstanding service, expert craftsmanship,
            and a partnership you can trust.
          </Text>
        </VStack>
      </Stack>
    </Container>
  );
}
