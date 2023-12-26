import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TestimonialComp from "../components/TestimonialComp";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTypeOther } from "../Redux/headerManage/Action";
import { getReview } from "../Redux/imagebannerslider/Action";
const Testimonialspage = () => {
  const reviews = useSelector(
    (store) => store.getImagesForBannerSlider.reviews
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReview());
  }, [dispatch]);

  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  return (
    <Box className="galary-page">
      <Heading
        as="h2"
        size="xl"
        letterSpacing={5}
        mt={"10px"}
        mb={"50px"}
        textAlign={"center"}
        fontWeight={400}
      >
        TESTIMONIAL
      </Heading>
      <SimpleGrid
        columns={{ base: 1, lg: 4 }}
        gap={{ base: 2, lg: 10 }}
        w={{ base: "99%", lg: "95%" }}
        m={"auto"}
        p={4}
        
      >
        {reviews?.map((e, i) => (
          <GridItem key={i}>
            <TestimonialComp {...e} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Testimonialspage;
