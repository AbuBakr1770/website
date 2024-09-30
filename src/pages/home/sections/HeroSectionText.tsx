import { Box, Button, Container, Text } from "@chakra-ui/react";

const HeroSectionText = () => {
  return (
    <Container
      maxW={"container.xl"}
      zIndex={5}
      display={"flex"}
      justifyContent={"flex-end"}
      position={"relative"}
      flexDirection={"column"}
    >
      <Text
        fontSize={"23px"}
        align={"end"}
        color={"white"}
        display={"block"}
        w={"100%"}
        fontFamily={"arabic"}
      >
        مقدمع عن شركتنا
      </Text>
      <Text
        fontFamily={"arabic"}
        align={"end"}
        fontSize={"55px"}
        color={"white"}
        fontWeight={"900"}
      >
        مجموعة شركات عدي
      </Text>
      <Text
        fontFamily={"arabic"}
        align={"end"}
        fontSize={"55px"}
        color={"custom.50"}
      >
        للأعمال{" "}
      </Text>
      <Text
        fontFamily={"arabic"}
        align={"end"}
        fontSize={"25px"}
        color={"white"}
      >
        ريادة في الاستثمار والاستشارات الاقتصادية بخبرة واسعة في دعم المؤسسات
        الحكومية والقطاع الخاص{" "}
      </Text>

      <Box
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
      </Box>
    </Container>
  );
};

export default HeroSectionText;
