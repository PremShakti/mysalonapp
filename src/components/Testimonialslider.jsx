import { Avatar, Box, Circle, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Testimonialslider = ({ img, name, review }) => {
  const navigate = useNavigate();
  const testiMonialPage = () => {
    navigate("/testimonial");
  };
  return (
    <Box
      clipPath=" polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)"
      w={{base:"340px",lg:"450px"}}
      h={{ base: "300px", lg: "400px" }}
      // bg={"rgb(105, 157, 255)"}
      background="linear-gradient(135deg, #5c67fd, #e733f7)"
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={{ base: 2, lg: 5 }}
      color={"white"}
      onClick={testiMonialPage}
    >
      <Circle
        w={{ base: "60px", lg: "80px" }}
        h={{ base: "60px", lg: "80px" }}
        border={"2px solid white"}
        overflow={"hidden"}
        mt={{ base: 5, lg: 10 }}
      >
        {img?(<Image src={img} alt={name + 1} w={"100%"} display={"block"} />):(<Avatar/>)}
      </Circle>
      <Heading as={"h4"} size={"sm"} borderBottom={"1px solid white"} color={"rgb(255,215,0)"} >
        #{name}
      </Heading>

      <Text
        fontFamily={"sans-serif"}
        w={{ base: "75%", lg: "85%" }}
        fontSize={{ base: "small", lg: "sm" }}
        textAlign={"center"}
        fontStyle={"italic"}
      >
        {review.slice(0, 241)}
      </Text>
    </Box>
  );
};

export default Testimonialslider;
