import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import image from "../images/logo.png";

export default function Footer() {
  const companyMenuItems = [
    {
      label: "What we do",
      link: "/what-we-do",
    },
    {
      label: "How it works",
      link: "/how-it-works",
    },
    {
      label: "Portfolio",
      link: "/portfolio",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];

  const servicesMenuItems = [
    {
      label: "Web Development",
      link: "/web-development",
    },
    {
      label: "UX/UI Design",
      link: "/ux-ui-design",
    },
    {
      label: "Mobile App Development",
      link: "/app-development",
    },
    {
      label: "Logo Design",
      link: "/logo-design",
    },
    {
      label: "Wordpress",
      link: "/wordpress",
    },
  ];

  const contactMenuItems = [
    {
      label: "letstalk@codecync",
      link: "/contact",
    },
    {
      label: "+92 333 1234567",
      link: "/contact",
    },
    {
      label: "Karachi, Pakistan",
      link: "/contact",
    },
  ];

  return (
    <VStack bg="gray.100" p="50" pb="0">
      <Stack
        justify="space-between"
        align="start"
        w="full"
        direction={{
          base: "column",
          md: "row",
        }}
      >
        <VStack maxW="500px" align="start">
          <Image src={image} w={200} />
          <Text color="gray.500">
            CodeCync is a technology consulting firm that provides end-to-end
            solutions, from concept and strategy, to design, implementation and
            support. We partner with clients to create and support innovative
            solutions that help businesses become a lasting success in the
            industry.
          </Text>
          <Text fontWeight="semibold" color="primary.700">
            Follow us
          </Text>
          <HStack>{/* Place Social Media Icons here */}</HStack>
        </VStack>
        <VStack align="flex-start" maxW="500px">
          <Text
            color="primary.700"
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
            Company
          </Text>
          {companyMenuItems.map((menuItem) => (
            <NavButton label={menuItem.label} link={menuItem.link} />
          ))}
        </VStack>
        <VStack align="flex-start" maxW="500px">
          <Text
            color="primary.700"
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
            Services
          </Text>
          {servicesMenuItems.map((menuItem) => (
            <NavButton label={menuItem.label} link={menuItem.link} />
          ))}
        </VStack>
        <VStack align="flex-start" maxW="500px">
          <Text
            color="primary.700"
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
            Contact
          </Text>
          {contactMenuItems.map((menuItem) => (
            <NavButton label={menuItem.label} link={menuItem.link} />
          ))}
        </VStack>
      </Stack>
      <Box bg="primary.50" p="4" pt="5" borderTopRadius="full">
        <Text fontWeight="semibold" color="primary.700" fontSize="sm">
          Copywrite &copy; {new Date().getFullYear()} CodeCync. All rights
          reserved.
        </Text>
      </Box>
    </VStack>
  );
}

function NavButton({ label, link }: { label: string; link: string }) {
  return (
    <HStack
      maxW="300px"
      w="auto"
      _hover={{
        backgroundColor: "secondary.100",
      }}
      cursor="pointer"
      p="3"
      borderRadius="full"
      role="group"
      onClick={() => {}}
    >
      <TriangleUpIcon
        color="gray.500"
        style={{
          transform: "rotate(90deg)",
        }}
        _groupHover={{
          color: "secondary.600",
        }}
      />
      <Text
        fontWeight="medium"
        color="gray.500"
        _groupHover={{
          color: "secondary.600",
        }}
        fontSize={{
          base: "sm",
          md: "md",
        }}
      >
        {label}
      </Text>
    </HStack>
  );
}
