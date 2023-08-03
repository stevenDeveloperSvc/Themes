import { Box, Button, Container, Text, Link, Hide, Show } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { paddingX } from "../styles/styles"

import { FiChevronDown } from "react-icons/fi";


const MenuItems = () => {
  return (
    <>
      <Menu isLazy >
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          margin="-4"
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          About us
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu >
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Pages
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Services
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Portfolio
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Blog
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          _hover={{ background: "transparent" }}
          _active={{ background: "transparent", color: "#FF4C01" }}
          bg="transparent"
          as={Button}
          rightIcon={<FiChevronDown />}
        >
          Contact us
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};


const Navbar = () => (
  <Box
    position="sticky"
    top="0"
    display="flex"
    alignItems="center"
    height="80px"
    width="100%"
    paddingX={paddingX}
    zIndex="sticky"
    bgColor="white"
    boxShadow="1px 50px 80px rgba(0,0,0,.3)"
  >


    <Hide below="md">

      <MenuItems />

    </Hide>

  </Box>



);


export default Navbar;
