import { Box, Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ForthComponentCard from "../components/ForthComponentCard";

const ForthSection = () => {
  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Text fontSize={"3rem"} color={"custom.50"} align={"end"}>
          خدماتنا
        </Text>

        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          my={4}
        >
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
            spacing={4}
          >
            <ForthComponentCard />
            <ForthComponentCard />
            <ForthComponentCard />
            <ForthComponentCard />
            <ForthComponentCard />
          </SimpleGrid>
        </Stack>
      </Box>
    </Container>
  );
};

export default ForthSection;
