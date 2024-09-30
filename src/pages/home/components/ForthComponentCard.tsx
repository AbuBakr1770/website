import { Box, Image, Text } from "@chakra-ui/react";
import image from "../../../AIQ/4thsectionCardImage1.png";

const ForthComponentCard = () => {
  return (
    <div>
      <Box
        border={"1px solid #0000001a"}
        boxShadow={"3px 3px #0000001a"}
        p={3}
        borderRadius={"20px"}
        display={"flex"}
        alignItems={"end"}
        flexDirection={"column"}
      >
        <Image src={image} />
        <Text color={"custom.50"} fontSize={"2rem"} align={"end"}>
          محاسبة وإدارة مالية
        </Text>
        <Text fontSize={"1.4rem"} fontWeight={"lighter"} align={"end"}>
          تشمل تقديم استشارات اقتصادية وإدارية للحكومات والبلديات في إسرائيل
          وفلسطين، لتحسين الأداء وتعزيز الشراكات الاقتصادية{" "}
        </Text>
      </Box>
    </div>
  );
};

export default ForthComponentCard;
