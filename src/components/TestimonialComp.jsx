import {
  Avatar,
  Box,
  Button,
  Circle,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { getReview, reviewDelete } from "../Redux/imagebannerslider/Action";

const TestimonialComp = ({ img, name, review, _id, deletev }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(reviewDelete(_id)).then(() => {
      dispatch(getReview());
    });
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow="rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px"
      borderRadius={"10px"}
      bg={"#292929"}
      gap={5}
      pb={3}
    >
      <Circle
        w={{ base: "60px", lg: "80px" }}
        h={{ base: "60px", lg: "80px" }}
        border={"2px solid white"}
        overflow={"hidden"}
        mt={{ base: 5, lg: 10 }}
      >
        {img ? (
          <Image src={img} alt={name + 1} w={"100%"} display={"block"} />
        ) : (
          <Avatar />
        )}
      </Circle>
      <Heading as={"h4"} size={"sm"} w={"100%"} textAlign={"center"}>
        {name}
      </Heading>
      <hr style={{ border: "1px dotted white", width: "20%" }} />
      <Text
      color={"white"}
        fontFamily={"sans-serif"}
        w={{ base: "90%", lg: "90%" }}
        fontSize={{ base: "small", lg: "sm" }}
        textAlign={"left"}
        fontStyle={"italic"}
        lineHeight={7}
      >
        {review}
      </Text>
      {deletev ? (
        <Button
          background="linear-gradient(135deg, #5c67fd, #e733f7)"
          color={"white"}
          fontSize={"14px"}
          onClick={handleDelete}
        >
          Delete
        </Button>
      ) : null}
    </Box>
  );
};

export default TestimonialComp;
