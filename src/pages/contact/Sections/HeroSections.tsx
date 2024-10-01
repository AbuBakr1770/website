import { Container, Text } from "@chakra-ui/react";

const HeroSectionTextContact = () => {
  return (
    <>
      <Container
        maxW={"container.xl"}
        zIndex={5}
        display={"flex"}
        justifyContent={"flex-end"}
        position={"relative"}
        flexDirection={"column"}
      >
        <Text
          fontSize={"3rem"}
          align={"end"}
          color={"white"}
          display={"block"}
          w={"100%"}
          fontWeight={"bolder"}
          fontFamily={"arabic"}
        >
          نحن هنا
          <Text as={"span"} color={"custom.50"}>
            لدعم نجاح
          </Text>
        </Text>
        <Text
          fontFamily={"arabic"}
          align={"end"}
          fontSize={"55px"}
          color={"white"}
          fontWeight={"900"}
        >
          <Text as={"span"} color={"custom.50"}>
            مشاريعكم
          </Text>
          وتقديم الاستشارات
        </Text>
        <Text
          fontFamily={"arabic"}
          align={"end"}
          fontSize={"55px"}
          color={"white"}
        >
          الاقتصادية{" "}
        </Text>
        <Text
          fontFamily={"arabic"}
          align={"end"}
          fontSize={"25px"}
          color={"white"}
        >
          لا تترددوا في الاتصال بنا للحصول على مزيد من المعلومات أو لتحديد موعد
          استشارة{" "}
        </Text>

        {/* <Box
          display={"flex"}
          gap={"10px"}
          mt={"5rem"}
          justifyContent={"flex-end"}
        >
          <Button
            size={"lg"}
            height={"70px"}
            width={"180px"}
            variant={"outline"}
            borderWidth={"2px"}
            color={"white"}
            fontSize={"x-large"}
            _hover={{
              color: "custom.50",
            }}
          >
            اكتشف المزيد
          </Button>
          <Button
            size={"lg"}
            height={"70px"}
            width={"180px"}
            fontSize={"x-large"}
            colorScheme={"primary"}
          >
            تواصل معنا
          </Button>
        </Box> */}
      </Container>
    </>
  );
};

export default HeroSectionTextContact;
