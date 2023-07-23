import { Box, Text, Heading, Flex, Circle } from "@chakra-ui/react";

import Form from "../components/Form";
import "../App.css";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import Map from "../components/Map";
const Contact = () => {
  return (
    <>
      <Heading
        id="contact"
        as="h2"
        size="xl"
        letterSpacing={5}
        mt={"50px"}
        mb={"50px"}
        textAlign={"center"}
      >
        CONTACT US
      </Heading>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        w={{ base: "100%", lg: "85%" }}
        margin={"auto"}
        mt={10}
        mb={10}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      >
        <Box
          w={{ base: "100%", lg: "65%" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          className="bgimage"
        >
          <Form />
        </Box>
        <Box
          display={"flex"}
          w={{ base: "100%", lg: "35%" }}
          bg={"rgb(110, 110, 255)"}
          color={"white"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box w={"80%"} pt={10} pb={10} fontFamily={"sans-serif"}>
            <Text lineHeight={7} textAlign={"left"}>
              Get the best salon experience! Have questions or want to book an
              appointment? We're here to help! Use the form below to reach our
              skilled team. Your satisfaction is our priority, so share your
              feedback too! For direct communication, find our contact details
              below. Get ready to be pampered and discover your true beauty at
              Ariess Mart Salon. We can't wait to see you!
            </Text>

            <Flex display={"flex"} flexDirection={"column"} mt={20} gap={5}>
              <Box display={"flex"} alignItems={"center"} gap={4}>
                <Circle
                  w="40px"
                  h="40px"
                  border={"2px solid white"}
                  fontSize={20}
                  color="white"
                >
                  <FaLocationDot />
                </Circle>
                <Box>
                  Dispensary Road, Sonari, B Block, C - 79, Jamshedpur,
                  Jharkhand 831011
                </Box>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={4}>
                <Circle
                  w="40px"
                  h="40px"
                  border={"2px solid white"}
                  fontSize={20}
                  color="white"
                >
                  <IoMdCall />
                </Circle>
                <Box>08757678822</Box>
              </Box>

              <Box display={"flex"} alignItems={"center"} gap={4}>
                <Circle
                  w="40px"
                  h="40px"
                  border={"2px solid white"}
                  fontSize={20}
                  color="white"
                >
                  <MdOutgoingMail />
                </Circle>
                <Box>abcdemo@gmail.com</Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Map />
    </>
  );
};

export default Contact;
