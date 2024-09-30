import { Box, BoxProps, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

interface BannerItemProps {
  top: number;
  left?: number;
  title?: string;
  description?: string;
  image?: any;
}
const BannerItem = React.forwardRef<HTMLDivElement, BannerItemProps>(
  ({ left, top, title, description, image }, ref) => {
    const MotionBox = motion<BoxProps>(Box);

    return (
      <MotionBox
        ref={ref}
        boxSize="50px"
        maxWidth="400px"
        p="1"
        borderWidth="medium"
        zIndex={3}
        borderRadius="full"
        backgroundColor="white"
        opacity={0.6}
        whileHover={{
          width: "auto",
          opacity: 1,
        }}
        overflow="hidden"
        position="absolute"
        top={`calc(100vh - ${top}%)`}
        left={`calc(100vw - ${left}%)`}
      >
        <HStack height="100%">
          <Image src={image} height="100%" borderRadius="full" />
          <VStack spacing={0} align="start" justify="center" height="100%">
            <Text
              fontSize="10px"
              textAlign="left"
              colorScheme="gray"
              color="gray"
              fontWeight="extrabold"
            >
              {title}
            </Text>
            <Text fontSize="sm" fontWeight="bold" noOfLines={1} width="200px">
              {description}
            </Text>
          </VStack>
        </HStack>
      </MotionBox>
    );
  }
);

export default BannerItem;
