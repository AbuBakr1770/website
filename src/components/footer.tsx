import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import image from "../images/Vector.png";

export default function Footer() {
  const contactInfo = [
    { label: "048160038" },
    { label: "info@abcgroup.co.ll", link: "mailto:info@abcgroup.co.ll" },
    { label: "كفر كنا، شارع اباي بنيت, صندوق بريد 873" },
    { label: "الاثنين-الخميس والسبت: 08:00 - 16:00" },
    { label: "الجمعة: 08:00 - 12:00" },
    { label: "الاحد: مغلق", isClosed: true },
  ];

  const businessCenters = [
    { label: "د. وائل كريم" },
    { label: "شركه سبيلي" },
    { label: "سيد3" },
    { label: "Royal Medical Clinic (دار السلام)", link: "#" },
    { label: "RabbitsIT company", link: "#" },
  ];

  const businessServices = [
    { label: "اداره ومراقبه الحسابات" },
    { label: "استشاره سبل التمويل" },
    { label: "بناء خطط تطوير اقتصاديه" },
    { label: "آقامه وتآسيس شركات محليه" },
    { label: "آقامه وتآسيس شركات دوليه" },
    { label: "تسويق وقود" },
  ];

  return (
    <>
      <VStack bg="gray.100" p="50" pb="30">
        <Stack
          justify="space-between"
          align="start"
          w="full"
          direction={{
            base: "column",
            md: "row",
          }}
        >
          <VStack maxW="500px" align="end">
            <Image src={image} w={120} />
            <Text color="gray.500" align={"end"}>
              هي شركة مساهمة تعمل منذ عام 1996 في مجال الاستثمارات والاستشارات
              الاقتصادية للقطاع الخاص وكذلك لمؤسسات حكومية وبلديات
            </Text>

            <HStack>{/* Place Social Media Icons here */}</HStack>
          </VStack>
          <VStack align="flex-end" maxW="500px">
            <Text
              color="custom.50"
              fontWeight="semibold"
              ml={{
                base: "0",
                md: "2",
              }}
              fontSize={{
                base: "md",
                md: "x-large",
              }}
            >
              تواصل معنا
            </Text>
            {contactInfo.map((menuItem, index) => (
              // <NavButton label={menuItem.label} link={menuItem.link} />
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "gray.500",
                }}
                align={"end"}
                key={index}
              >
                {menuItem.label}
              </Text>
            ))}
          </VStack>
          <VStack align="flex-end" maxW="500px">
            <Text
              color="custom.50"
              fontWeight="semibold"
              ml={{
                base: "0",
                md: "2",
              }}
              fontSize={{
                base: "md",
                md: "x-large",
              }}
            >
              شركات ضمن مركز عدي للأعمال
            </Text>
            {businessCenters.map((menuItem, index) => (
              // <NavButton label={menuItem.label} link={menuItem.link} />
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "gray.500",
                }}
                align={"end"}
                key={index}
              >
                {menuItem.label}
              </Text>
            ))}
          </VStack>
          <VStack align="flex-end" maxW="500px">
            <Text
              color="custom.50"
              fontSize={{
                base: "md",
                md: "x-large",
              }}
              fontWeight="semibold"
              ml={{
                base: "0",
                md: "2",
              }}
            >
              خدمات مركز عدي للاعمال
            </Text>
            {businessServices.map((menuItem, index) => (
              // <NavButton label={menuItem.label} link={menuItem.link} />
              <Text
                _hover={{
                  cursor: "pointer",
                  color: "gray.500",
                }}
                align={"end"}
                key={index}
              >
                {menuItem.label}
              </Text>
            ))}
          </VStack>
        </Stack>
      </VStack>
      <Box bg="custom.50" p="4" pt="5">
        <Text
          fontWeight="semibold"
          align={"end"}
          color="primary.700"
          fontSize="sm"
        >
          جميع الحقوق محفوظة لمجموعة عدي للأعمال © 202 
        </Text>
      </Box>
    </>
  );
}
