import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTypeOther } from "../Redux/headerManage/Action";
import { Box, Heading } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Imagegallry from "../components/Imagegallry";
import { getImages } from "../Redux/postreducer/Action";
import { images } from "../data/gallery";

const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  // const images=useSelector((store)=>store.getImages.images)
  useEffect(()=>{
    dispatch(getImages())
  },[dispatch])



  return (
    <>
      <Heading
        as="h2"
        size="xl"
        letterSpacing={5}
        mt={"50px"}
        mb={"50px"}
        textAlign={"center"}
        bgGradient="linear(to-r, gold, white)"
        bgClip="text"
        color="transparent"
      >
        GALLERY
      </Heading>
      <Box
        w={{ base: "99%", lg: "90%" }}
        m={"auto"}
        mt={"10px"}
        p={3}
        className="galary-page"
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="15px">
            {images?.map((image, index) => (
              <Imagegallry key={index} image={image} index={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </>
  );
};

export default Gallery;
