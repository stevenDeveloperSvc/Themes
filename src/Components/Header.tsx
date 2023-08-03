import { Box, Flex, Icon, Text, Divider, Button, Show } from "@chakra-ui/react";
import { paddingX } from "../styles/styles";
import { GrStatusGood } from "react-icons/gr";
import {
    BiSolidChevronRightCircle,
    BiPhoneCall,
    BiTimeFive, BiSend,
    BiLogoGmail
    , BiLogoTwitter, BiLogoFacebook, BiLogoGooglePlus, BiLogoLinkedinSquare
} from "react-icons/bi";






const Header = () => {
    return (
        <>
            <Flex
                width="100%"
                height="80px"
                bg="primary.100"
                paddingX={paddingX}
                alignItems="center"
                justifyContent="space-between"
            >

                <Flex
                    alignItems="center"
                >

                    <Button

                        height="50px"
                        bg="font.100"
                        color="#FF4C01"

                        _hover={{

                            backgroundColor: "transparent",
                            border: "1px solid",
                            borderColor: "#FFF",
                            color: "white"
                        }}
                        rightIcon={<BiPhoneCall />}
                    >
                        Call me
                    </Button>
                    <Box>
                        <Icon color="font.100" as={BiTimeFive} />
                        <Text
                            display="inline"
                            fontFamily="font"
                            fontSize="sm"
                            color="font.100" >Mon - Fri 09:00 - 17:00 </Text>
                    </Box>
                    <Box>
                        <Icon  color="font.100" as={BiSend} />
                        <Text
                            display="inline"
                            fontFamily="font"
                            fontSize="sm"
                            color="font.100" >Mon - Fri 09:00 - 17:00 </Text>
                    </Box>



                </Flex>

                <Box>
                    <Icon as={BiLogoGmail} />
                    <Icon as={BiLogoFacebook} />
                    <Icon as={BiLogoGooglePlus} />
                    <Icon as={BiLogoLinkedinSquare} />
                    <Icon as={BiLogoTwitter} />
                </Box>
            </Flex>

            <Show above="md">



                <Flex
                    width="100%"
                    height="100px"
                    alignItems="center"
                    paddingX={paddingX}
                    bg="font.100"
                >
                    <Flex
                        width="100px"
                        position="relative"
                        height="100%"
                        alignItems='center'

                    >

                        <Text fontFamily="font" fontSize="3xl" fontWeight="bold">
                            <Text color="primary.100" as="span">
                                Dr.
                            </Text>
                            Clean
                        </Text>
                    </Flex>


                    <Flex
                        position="relative"
                        height="100%"
                        width={"100%"}
                        flexDir="row"
                        alignItems="center"
                        justifyContent="end"

                    >
                        <Flex
                            width="140px"
                            height="50%"
                            padding="3"
                            justifyContent="space-between"
                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>
                        <Divider marginX={3} h="50px" orientation='vertical' />
                        <Flex
                            width="140px"

                            height="50%"
                            padding="3"
                            justifyContent="space-between"

                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>
                        <Divider marginX={3} h="50px" orientation='vertical' />

                        <Flex
                            width="140px"

                            height="50%"
                            padding="3"
                            justifyContent="space-between"

                        >
                            <Icon width="20px" height="20px" as={GrStatusGood} />

                            <Flex
                                justifyContent="space-around"
                                flexDir="column"
                            >
                                <Text fontSize="md" color="black" fontFamily="font" fontWeight="bold">The best</Text>
                                <Text textAlign="end" fontSize="smaller" color="font.200">ISO 9001:2008</Text>

                            </Flex>



                        </Flex>



                        <Button
                            marginLeft="25px"
                            height="50px"
                            bg="font.100"
                            color="#FF4C01"
                            _hover={{
                                background: "#FF4C01",
                                color: "white"
                            }}
                            rightIcon={<BiSolidChevronRightCircle />}
                        >
                            Learn More
                        </Button>


                    </Flex>


                </Flex>
            </Show>

        </>
    )
}

export default Header



