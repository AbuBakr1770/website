import { Box, Grid, Image, Text } from "@chakra-ui/react";
import image from "../../../AIQ/ThirdSectionMiniArrow.png";
import image2 from "../../../AIQ/thirdsectioncardimg1.png";

const ThirdComponentCard = () => {
  return (
    <div>
      <Grid
        templateColumns={{ base: "30% 70%", md: "30% 70%" }}
        border={"1px solid #0000001a"}
        borderRadius={"20px"}
        padding={2}
        minW={"22rem"}
      >
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Image src={image} w={"34px"} />
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row-reverse"}
          gap={1}
          alignItems={"center"}
        >
          <Image src={image2} />
          <Box>
            <Text fontSize={"1.6rem"} fontWeight={"900"}>
              شركه سهاري
            </Text>
            <Text>استشارات اقتصاديه</Text>
          </Box>
        </Box>
      </Grid>
    </div>
  );
};

export default ThirdComponentCard;
