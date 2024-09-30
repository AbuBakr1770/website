import { TriangleUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import brealhealth from "./../../../images/brealhealth.png";
import brealhealth2 from "./../../../images/brealhealth2.png";
import brealhealth3 from "./../../../images/brealhealth3.png";
import naplozz from "./../../../images/naplozz.png";
import naplozz2 from "./../../../images/naplozz2.png";
import naplozz3 from "./../../../images/naplozz3.png";
import nofuntoads from "./../../../images/nofuntoads.png";
import nofuntoads1 from "./../../../images/nofuntoads1.png";
import nofuntoads2 from "./../../../images/nofuntoads2.png";
import smartknit from "./../../../images/smartknit.png";
import smartknit1 from "./../../../images/smartknit1.png";
import smartknit2 from "./../../../images/smartknit2.png";

import ScrollLeftSVG from "./../../../images/scroll-left.png";
import ScrollRightSVG from "./../../../images/scroll-right.svg";
export default function Portfolio() {
  const portfolioItems = [
    {
      description: (
        <>
          "Qoodo is a quality management app that leverages the innovation of
          blockchain and AI, gamifying the world of compliance and productivity
          to create an engaging and efficient experience for businesses and
          teams.
        </>
      ),
      label: "Smart Quality Management",
      key: "school-management-system",
      images: [naplozz, naplozz2, naplozz3],
    },
    {
      description: (
        <>
          SmartKnit is an RFID-based smart monitoring system for textile
          industry. Analytics are updated on the dashboard for users when the
          worker scans the card for his/her user login, unit made or for fixing
          the type of operation on the production line. This real-time
          monitoring system was emulated for remote visibility of potential
          customers. The system was formed using frontend technologies and
          actual APIs developed for backend server.
        </>
      ),
      label: "SmartKnit",
      key: "food-delivery-application",
      images: [smartknit, smartknit1, smartknit2],
    },
    {
      description: (
        <>
          Brell Health is a forward-looking platform that focuses on enhancing
          mental health and well-being for both individuals and organizations.
          By offering a comprehensive suite of tools and resources, Brell Health
          empowers users to proactively manage their mental wellness. Through
          personalized assessments and tailored wellness plans, individuals can
          gain insights into their mental health status and access resources
          that cater to their unique needs.
        </>
      ),
      label: "Brell Health",
      key: "hoogle-maps",
      images: [brealhealth, brealhealth2, brealhealth3],
    },
    {
      description: (
        <>
          "NO FUN TOADS" is a captivating platform that celebrates creativity,
          experimentation, and community collaboration. With its vibrant and
          whimsical design, the site serves as a showcase for a wide array of
          creative projects and artistic endeavors. Visitors are invited to
          explore an eclectic collection of interactive experiences, animations,
          and digital art pieces, each crafted by a diverse community of
          contributors.
        </>
      ),
      label: "No Fun Toads (NFT Website)",
      key: "godoit-application",
      images: [nofuntoads, nofuntoads1, nofuntoads2],
    },
  ];

  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState(0);

  const controls = useAnimationControls();

  function handlePortfolioClick(index: number) {
    controls.start({
      opacity: 0,
    });

    setTimeout(() => {
      setSelectedPortfolioItem(index);
      controls.start({
        opacity: 1,
      });
    }, 300);
  }

  return (
    <Container py={40} my="40" maxW={"container.xl"} bgColor="gray.100">
      <Heading color="primary.600" fontSize="40px" textAlign={"start"}>
        Our Portfolio
      </Heading>
      <HStack
        align="start"
        paddingLeft={
          {
            // md: "50px",
            // xs: "0px",
          }
        }
        spacing={10}
      >
        <VStack
          alignItems="flex-start"
          display={{
            base: "none",
            md: "flex",
          }}
          minWidth="300px"
        >
          {portfolioItems.map((item, i) => (
            <HStack
              key={item.key}
              _hover={{
                backgroundColor: "secondary.100",
              }}
              cursor="pointer"
              p="3"
              borderRadius="full"
              role="group"
              onClick={() => {
                handlePortfolioClick(i);
              }}
            >
              <TriangleUpIcon
                color="gray.500"
                style={{
                  transform: "rotate(90deg)",
                }}
                _groupHover={{
                  color: "secondary.600",
                }}
              />
              <Text
                fontWeight="medium"
                color="gray.500"
                _groupHover={{
                  color: "secondary.600",
                }}
              >
                {item.label}
              </Text>
            </HStack>
          ))}
        </VStack>

        <VStack
          w="100%"
          overflowX="hidden"
          pl={{
            // base: "50",
            md: "0px",
          }}
          m={0}
        >
          <motion.div
            animate={controls}
            className="123123123"
            style={{ width: "100%", margin: 0 }}
          >
            <HStack
              overflowX="scroll"
              className="no-scrollbar"
              align="flex-start"
              w="full"
            >
              {portfolioItems?.[selectedPortfolioItem]?.images?.map(
                (image, i) => (
                  <Box key={i} maxWidth="500px" maxH="300px">
                    <Box pb="30px">
                      <Image
                        h={"150px"}
                        rounded="md"
                        src={image}
                        border="2px"
                      />
                    </Box>
                  </Box>
                )
              )}
            </HStack>
            <VStack pb="5" maxW="100%" alignItems="flex-start">
              <Text>
                {portfolioItems?.[selectedPortfolioItem]?.description}
              </Text>
            </VStack>
          </motion.div>

          <HStack w="100%" paddingRight="50">
            <Image src={ScrollLeftSVG} w="60px" />
            <Image src={ScrollRightSVG} w="60px" />
            <Divider borderBottomWidth="5px" borderColor="border.primary" />
          </HStack>
        </VStack>
      </HStack>
    </Container>
  );
}
