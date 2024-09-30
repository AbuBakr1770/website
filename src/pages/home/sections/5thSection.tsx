import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import image from "../../../AIQ/5thSectionImage1.png";
import image2 from "../../../AIQ/5thSectionImage2.png";
const FifthSection = () => {
  return (
    <div>
      <Container maxW={"container.xl"}>
        <Box>
          <Text fontSize={"3rem"} color={"custom.50"} align={"end"}>
            مشاريعنا{" "}
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
              <Image src={image} />
              <Image src={image} />
              <Image src={image2} />
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

export default FifthSection;
