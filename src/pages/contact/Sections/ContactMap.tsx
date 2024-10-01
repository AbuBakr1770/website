import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import image from "../../../AIQ/contactMap.png";
const ContactMap = () => {
  return (
    <Container maxW={"container.xl"} my={5}>
      <Box>
        <Text
          mb="8px"
          fontSize={"3rem"}
          color={"custom.50"}
          fontWeight={"lighter"}
          align={"end"}
        >
          تفاصيل الاتصال
        </Text>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <Image src={image} />

            <Box
              gap={4}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-evenly"}
            >
              <Text fontSize={"1.2rem"} align={"end"}>
                048160038
              </Text>
              <Text fontSize={"1.2rem"} align={"end"}>
                info@abcgroup.co.ll
              </Text>
              <Text fontSize={"1.2rem"} align={"end"}>
                كفر كنا , شارع ابني بيتك , صندوق بريد 873{" "}
              </Text>
              <Text fontSize={"1.3rem"} align={"end"}>
                الإثنين-الخميس والسبت:8:00-16:0
                <br />
                الجمعة: 08:00 - 12:00
                <br />
                الاحد: مغلق
              </Text>
            </Box>
          </SimpleGrid>
        </Stack>
      </Box>
    </Container>
  );
};

export default ContactMap;
