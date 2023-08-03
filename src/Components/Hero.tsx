import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { BiSolidChevronRightCircle } from 'react-icons/bi'
import { paddingX } from "../styles/styles"

import bg from "../assets/imagebg.jpg";

function Background() {
  return (
    <Box
      backgroundImage={`url(${bg})`}
      backgroundSize={"cover"}
     backgroundPosition={{ base: "-960px", md: "-20px" }}
      backgroundRepeat="no-repeat"
      filter="blur(.5px) grayscale(20%) brightness(.6)"
      position="fixed"
      boxShadow="inset 10px 10px 50px rgba(0, 0, 0, .5)"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="-1"
    ></Box>
  );
}
const Hero = () => {
  return (
    <>
      <Background />

      <Box
        height={{ base: "100vh", lg: "1000px" }}
        width="100%"
        position="relative"
        display="flex"
        alignItems={{ base: "center", md: "start" }}

        padding={{ base: "6", md: "60" }}
        paddingX={paddingX}
      >
        <Box width={"xl"} >
          <Heading
            fontFamily="font"
            fontWeight="bold"
            fontSize={{ base: "2xl", md: "7xl" }}
            color="font.100"
            marginBottom={"30px"}
          >
            NEED IT FIXED?  WE CARE TO FIX IT RIGHT
          </Heading>

          <Text
            fontFamily="font"
            color="font.100"
            fontSize={{ base: "xl", md: "2xl" }}
            marginBottom="30px"

          >
            Our power of choice is untrammeleed and when nothing being able to
            do what we like bes
          </Text>

          <Button
            height="50px"
            position="absolute"
            color="#FF4C01"
            bg="font.100"
            _hover={{
              background: "#FF4C01",
              color: "white"
            }}
            rightIcon={<BiSolidChevronRightCircle />}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
