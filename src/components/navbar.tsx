import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { NavLink, useLocation } from "react-router-dom";
import image from "../images/Vector.png";

export default function Navbar() {
  const { pathname } = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const burgerMenuRef = React.useRef<HTMLButtonElement>(null);
  const navOptions = [
    {
      label: "الرئيسيه",
      path: "/",
    },
    {
      label: "من نحن",
      path: "/services",
    },
    {
      label: "الشركات",
      path: "/about",
    },
    {
      label: "المشاريع",
      path: "/portfolio",
    },
    {
      label: "اخبار",
      path: "/contact",
    },
    {
      label: "تواصل معنا",
      path: "/contact",
    },
  ];

  return (
    <Box
      position={"relative"}
      zIndex={2}
      height={"100px"}
      borderBottom={"1px solid white"}
      mb={"20px"}
    >
      <Container maxW="container.xl">
        <Flex
          alignItems="center"
          p="2"
          left={0}
          right={0}
          zIndex="10"
          flexDirection={"row-reverse"}
        >
          <Image w="auto" h="100px" src={image} />
          <ButtonGroup
            gap="2"
            display={{
              xs: "none",
              md: "block",
            }}
          >
            {navOptions.map(({ label, path }, i) => (
              <Button
                as={NavLink}
                to={path}
                key={i}
                variant="ghost"
                fontSize={"20px"}
                colorScheme={pathname !== path ? "custom" : "custom"}
              >
                {label}
              </Button>
            ))}
          </ButtonGroup>
          {/* <Button
            colorScheme="secondary"
            variant="outline"
            display={{
              xs: "none",
              md: "block",
            }}
          >
            Start Project
          </Button> */}
          <Fragment>
            <IconButton
              onClick={onOpen}
              ref={burgerMenuRef}
              colorScheme="secondary"
              aria-label="burger-menu"
              icon={<CgMenuGridR />}
              display={{
                xs: "flex",
                md: "none",
              }}
            />
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={burgerMenuRef}
              size="full"
              isFullHeight
              blockScrollOnMount={false}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerHeader as={HStack} justify="space-between" p="8px">
                  <Image w="150px" src={image} />
                  <IconButton
                    onClick={onClose}
                    colorScheme="secondary"
                    aria-label="burger-close-menu"
                    icon={<IoMdClose />}
                  />
                </DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </Fragment>
        </Flex>
      </Container>
    </Box>
  );
}
