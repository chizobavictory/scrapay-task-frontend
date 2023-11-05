import React, { useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import AddBookModal from "./AddBookModal";
import logo from "../assets/nestjs-light.svg";
import avatar from "../assets/profile-circle-fill.svg";

interface Props {
  children: React.ReactNode;
}

const Links = ["Dashboard", "Projects", "Team"];

const addBook = (name: string, description: string) => {
  // Implement your add logic here
};

const NavLink = (props: Props) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {props.children}
    </Box>
  );
};

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <img src={logo} alt="logo" />
            </Box>
            <Text fontWeight="bold">Nest Book Store</Text>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4} leftIcon={<AddIcon />} onClick={() => setModalOpen(true)}>
              Add Book
            </Button>
            <Menu>
              <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
                <Avatar size={"sm"} src={avatar} />
              </MenuButton>
              <MenuList>
                <MenuItem>USERNAME:</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <AddBookModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onAddBook={addBook} />
    </>
  );
};

export default Navbar;
