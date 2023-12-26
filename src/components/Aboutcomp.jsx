import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import "../App.css";
const Aboutcomp = () => {
  return (
    <Box mt={10} id="about">
      <Heading
        mt={{ base: "55px", lg: "100px" }}
        pb={{ base: "20px", lg: "100px" }}
        as="h2"
        size="xl"
        letterSpacing={5}
        textAlign={"center"}
        fontFamily={`Arvo", Helvetica, Arial, sans-serif`}
        fontWeight={400}
      >
        ABOUT US
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        w={{ base: "90%", lg: "70%" }}
        m={"auto"}
        gap={10}
      >
        <Box>
          <Box
            position={"relative"}
            pt={10}
            w={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className="bannerRight"
          >
            <div class="box">
              <div class="face front">
                {" "}
                <Image w={"100%"} src="/PIC1.jpg" alt="" />{" "}
              </div>
              <div class="face back">
                {" "}
                <Image w={"100%"} src="/PIC2.png" alt="" />{" "}
              </div>
              <div class="face left">
                {" "}
                <Image w={"100%"} src="/PIC3.png" alt="" />{" "}
              </div>
              <div class="face right">
                {" "}
                <Image w={"100%"} src="/PIC4.png" alt="" />{" "}
              </div>
              <div class="face top">
                {" "}
                <Image w={"100%"} src="/PIC1.jpg" alt="" />{" "}
              </div>
              <div class="face bottom">
                {" "}
                <Image w={"100%"} src="/PIC2.png" alt="" />{" "}
              </div>
            </div>
          </Box>
        </Box>
        <Box
          border={"1px solid rgb(255,215,0)"}
         
          borderRadius={"20px 0px 20px 0px"}
          backgroundImage= "url('/PIC2.png')"
          overflow={"hidden"}
          
        >
          <Box  h={"100%"} backgroundColor= "rgba(0, 0, 0, 0.7)"  pt={10}
          pb={10}>
          <Text
            textAlign={"center"}
            mb={"10px"}
            // color="linear-gradient(135deg, #5c67fd, #e733f7)"
            backgroundImage= "linear-gradient(to right, #80ffa6, #f479ff)"
            backgroundClip= "text"
            color= "transparent"
            fontWeight={"bold"}
            fontSize={"large"}
          >
            10+ Years Of Exprience
          </Text>
          <Text
            w={"80%"}
            m={"auto"}
            lineHeight={6}
            fontFamily={"sans-serif"}
            fontSize={"small"}
          >
            Aries- Smart Family Salon has been promoted by the professionals
            with more than 10 years of experience of salon industry.There has
            been need of a professional salon service in Jamshedpur to keep the
            pace with the growing demand both in terms of quantity and
            quality.The promoters AASH INDIA has long experience in the salon
            industry to render the world class service .There has been tie up
            with top producers of salon products .
          </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Aboutcomp;
