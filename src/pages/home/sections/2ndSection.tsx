import { Box, Button, Container, Grid, Image, Text } from "@chakra-ui/react";
import image from "../../../AIQ/secondSectiongroupPhoto.png";
const SecondndSection = () => {
  return (
    <Container maxW={"container.xl"} my={6}>
      <Text
        align={"end"}
        fontFamily={"arabic"}
        color={"custom.50"}
        fontSize={"3rem"}
      >
        من نحن
      </Text>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Image src={image} height={"100%"} width={"auto"} />
        <Box>
          <Text
            align={"end"}
            fontFamily={"arabic"}
            color={"custom.50"}
            fontSize={"3rem"}
          >
            عدي للاعمال
          </Text>
          <Text
            align={"end"}
            fontFamily={"arabic"}
            fontWeight={"lighter"}
            fontSize={"1.7rem"}
          >
            هي شركة مساهمة تعمل منذ عام 1996 في مجال
            <Text as={"span"} color={"custom.50"} fontWeight={"900"}>
              لاستثمارات والاستشارات الاقتصادية
            </Text>
            ا للقطاع الخاص وكذلك لمؤسسات حكومية وبلديات تعمل هذه الشركة من خلال
            شركات بنات لها في قطاعات مختلفة في إسرائيل، فلسطين والامارات العربيه
            المتحده{" "}
          </Text>
          <Box
            mt={2}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"end"}
          >
            <Box>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                color={"custom.50"}
                fontSize={"1.8rem"}
                fontWeight={"bolder"}
              >
                تميزنا
              </Text>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                fontSize={"1.4rem"}
                fontWeight={"lighter"}
              >
                ظهر في تأسيس أول شركة مساهمة عامة وحاضنة تكنولوجية في المجتمع
                العربي بإسرائيل لدعم وتمويل المبادرات التقنية
              </Text>
            </Box>
            <Box>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                color={"custom.50"}
                fontSize={"1.8rem"}
                fontWeight={"bolder"}
              >
                أبحاثنا
              </Text>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                fontSize={"1.4rem"}
                fontWeight={"lighter"}
              >
                تتضمن إجراء أكبر بحث أكاديمي حول تأثير السياسة المحلية على
                التطوير الاقتصادي في السلطات المحلية العربية في إسرائيل{" "}
              </Text>
            </Box>
            <Box>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                color={"custom.50"}
                fontSize={"1.8rem"}
                fontWeight={"bolder"}
              >
                خدماتنا الاستشارية
              </Text>
              <Text
                align={"end"}
                fontFamily={"arabic"}
                fontSize={"1.4rem"}
                fontWeight={"lighter"}
              >
                تشمل تقديم استشارات اقتصادية وإدارية للحكومات والبلديات في
                إسرائيل وفلسطين، لتحسين الأداء وتعزيز الشراكات الاقتصادية{" "}
              </Text>
            </Box>
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
      </Grid>
    </Container>
  );
};

export default SecondndSection;
