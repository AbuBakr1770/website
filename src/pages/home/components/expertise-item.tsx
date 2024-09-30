import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import contactIcon from "../../../images/contactIcon.svg";
export default function ExpertiseItem({ image, title, description }) {
  return (
    <Box
      w="xs"
      minW="xs"
      borderWidth="2px"
      borderRadius="12px"
      borderColor="border.primary"
    >
      <Box as={Center} py="30px">
        <Image src={image} />
      </Box>
      <Divider borderBottomWidth="2px" color="border.primary" />
      <Box p="20px">
        <Text fontSize="22px" fontWeight="medium">
          {title}
        </Text>
        <Text fontSize="15px" fontWeight="500">
          {description}
        </Text>
        <Flex mt="20px" justifyContent="space-between" alignItems="center">
          <Button size="sm" colorScheme="gray">
            Read more
          </Button>
          <Image src={contactIcon} />
        </Flex>
      </Box>
    </Box>
  );
}
