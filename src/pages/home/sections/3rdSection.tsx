import { Container, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import ThirdComponentCard from "../components/ThirdComponentCard";

const ThirdSection = () => {
  return (
    <Container maxW={"container.xl"} my={6}>
      <Text align={"end"} fontSize={"3rem"} color={"custom.50"}>
        شركاتنا
      </Text>
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2, lg: 2, xl: 3 }}
          spacing={2}
        >
          <ThirdComponentCard />
          <ThirdComponentCard />
          <ThirdComponentCard />
          <ThirdComponentCard />
          <ThirdComponentCard />
          <ThirdComponentCard />
        </SimpleGrid>
      </Stack>
    </Container>
  );
};

export default ThirdSection;
