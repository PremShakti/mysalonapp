import {
  Box,
  Flex,
  GridItem,
  Heading,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      pt={10}
      bg={"#201e1e"}
      // bg={"#f5f5f5"}
      color={"white"}
    >
      <SimpleGrid w={"90%"} columns={{ base: 1, lg: 3 }} gap={10}>
        <GridItem>
          <Heading as={"h2"} size={"xl"} mb={10}>
            About Us
          </Heading>
          <UnorderedList listStyleType={"none"}>
            <ListItem lineHeight={6} fontFamily={"sans-serif"}>
              Aries- Smart Family Salon has been promoted by the professionals
              with more than 10 years of experienc of salon industry. There has
              been need of a professional salon service in Jamshedpur to keep
              the pace with the growing demand both in terms of quantity and
              quality.
            </ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem>
          <Heading as={"h2"} size={"xl"} mb={10}>
            Services
          </Heading>
          <UnorderedList spacing={2} fontWeight={"bold"}>
            <ListItem>Hair Styling</ListItem>
            <ListItem>Hair Colouring</ListItem>
            <ListItem>Hair Straightening</ListItem>
            <ListItem>Hair Keratine</ListItem>
            <ListItem>About</ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem>
          <Heading as={"h2"} size={"xl"} mb={10}>
            OUR HOURS
          </Heading>
          <UnorderedList spacing={5}>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              pt={3}
              pb={3}
              w={{ base: "99%", lg: "60%" }}
              borderTop={"1px dotted"}
              borderBottom={"1px dotted"}
            >
              <Text>All 7 Days</Text>
              <Text>10:30 AM - 08:00 PM</Text>
            </ListItem>

            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-between"}
              pt={3}
              pb={3}
              w={{ base: "95%", lg: "60%" }}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"50px"}
                h={"50px"}
                bg={"white"}
                borderRadius={"10px"}
                fontSize={20}
                background="linear-gradient(135deg, #5c67fd, #e733f7)"
              >
                
                <FaFacebookF />
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"50px"}
                h={"50px"}
                bg={"white"}
                borderRadius={"10px"}
                fontSize={20}
                background="linear-gradient(135deg, #5c67fd, #e733f7)"
              >
                
                <FaInstagram />
              </Box>

              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                w={"50px"}
                h={"50px"}
                bg={"white"}
                borderRadius={"10px"}
                fontSize={20}
                background="linear-gradient(135deg, #5c67fd, #e733f7)"
              >
                
                <FaTwitter />
              </Box>
            </ListItem>
          </UnorderedList>
        </GridItem>
      </SimpleGrid>

      <Flex
        mt={"70px"}
        display={"flex"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        height={"80px"}
        borderTop={"1px solid #8a8a8a"}
      >
        <Text textAlign={"center"}>
          Copyright © 2023 ariessmartsalon.com. Powered by ariessmartsalon.com.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
