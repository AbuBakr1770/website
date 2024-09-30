import {
  Box,
  Button,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import SixthSectionCard from "../components/SixthSectionCard";

const SixthSection = () => {
  return (
    <div>
      <Container maxW={"container.xl"} my={6}>
        <Box>
          <Text fontSize={"3rem"} color={"custom.50"} align={"end"}>
            اخر الاخبار{" "}
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
              <SixthSectionCard />
              <SixthSectionCard />
              <SixthSectionCard />
            </SimpleGrid>
          </Stack>

          <Box display={"flex"} justifyContent={"end"} alignItems={"end"}>
            <Button
              size={"lg"}
              height={"70px"}
              width={"180px"}
              fontSize={"x-large"}
              colorScheme={"primary"}
              bg={"custom.50"}
              mt={2}
            >
              اكتشف المزيد{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SixthSection;
