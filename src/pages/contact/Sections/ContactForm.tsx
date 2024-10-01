import {
  Box,
  Button,
  Container,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import image from "../../../AIQ/contactPageImage.png";
const ContactForm = () => {
  return (
    <Container maxW={"container.xl"}>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          mt={4}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <Image src={image} />

            <Box as="form">
              <Box>
                <Text
                  mb="8px"
                  fontSize={"1.3rem"}
                  fontWeight={"lighter"}
                  align={"end"}
                >
                  الاسم بالكامل
                </Text>
                <Input
                  bg={"#87AAD4"}
                  placeholder="ادخل الاسم الاول والاخير"
                  size="md"
                  borderRadius={"15px"}
                  textAlign="left"
                />
              </Box>

              <Box>
                <Text
                  mb="8px"
                  fontSize={"1.3rem"}
                  fontWeight={"lighter"}
                  align={"end"}
                >
                  الهاتف
                </Text>
                <Input
                  bg={"#87AAD4"}
                  placeholder="ادخل رقم هاتفك"
                  size="md"
                  borderRadius={"15px"}
                  textAlign="left"
                />
              </Box>
              <Box>
                <Text
                  mb="8px"
                  fontSize={"1.3rem"}
                  fontWeight={"lighter"}
                  align={"end"}
                >
                  البريد الالكتروني{" "}
                </Text>
                <Input
                  bg={"#87AAD4"}
                  placeholder="example@gmail.com"
                  size="md"
                  borderRadius={"15px"}
                  textAlign="left"
                />
              </Box>
              <Box>
                <Text
                  mb="8px"
                  fontSize={"1.3rem"}
                  fontWeight={"lighter"}
                  align={"end"}
                >
                  التفاصيل
                </Text>
                <Textarea
                  bg={"#87AAD4"}
                  placeholder="ادخل تفاصيل رسالتك"
                  size="lg"
                  borderRadius={"15px"}
                  textAlign="left"
                  height={"15rem"}
                />
              </Box>
            </Box>
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
          >
            ارسال رساله
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
