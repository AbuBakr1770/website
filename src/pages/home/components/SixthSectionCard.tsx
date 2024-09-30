import { Box, Image, Text } from "@chakra-ui/react";
import image from "../../../AIQ/6thsectionimage1.png";

const SixthSectionCard = () => {
  return (
    <div>
      <Box
        border={"1px solid #0000001a"}
        borderRadius={"20px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"end"}
        p={3}
        flexDirection={"column"}
        gap={3}
      >
        <Image src={image} />
        <Box maxW={"24rem"}>
          <Text fontSize={"1.4rem"} color={"custom.50"} align={"end"}>
            دليل المبتدئين للاستثمار الناجح
          </Text>
          <Text fontSize={"1.3rem"} align={"end"}>
            قبل البدء، حدد أهدافك الاستثمارية بوضوح. هل ترغب في تحقيق عوائد
            قصيرة الأجل، أم بناء ثروة على المدى الطويل؟ يساعد تحديد الأهداف في
            توجيه قراراتك{" "}
          </Text>
        </Box>
        <Box display={"flex"} alignItems={"end"}>
          <Text color={"custom.50"} fontSize={"1.4rem"} align={"end"}>
            اقرأ اكثر
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default SixthSectionCard;
