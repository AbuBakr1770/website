import {Button, Center, Flex, Text, VStack} from "@chakra-ui/react";

export default function GetInTouch() {
  return (
    <Center my="50">
      <Flex
        shadow="sm"
        bgColor="secondary.50"
        px="10"
        py="14"
        borderRadius="xl"
        // spacing="40"
        w="100%"
        mx="16"
        justify="space-between"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <VStack alignItems="flex-start" maxW="900px">
          <Text
            color="primary.700"
            fontWeight="semibold"
            fontSize={{
              base: "2xl",
              md: "3xl",
            }}
          >
            Let's make something great together
          </Text>
          <Text
            fontSize={{
              base: "md",
              md: "lg",
            }}
          >
            Let us know about your business plans on an introductory call, and
            we’ll lead the matching process.
          </Text>
        </VStack>
        <Center
          flexGrow={1}
          mt={{
            base: "10",
            md: "0",
          }}
        >
          <Button colorScheme="secondary" size="lg">
            Get in touch
          </Button>
        </Center>
      </Flex>
    </Center>
  );
}
