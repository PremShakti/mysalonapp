import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTypeOther } from "../Redux/headerManage/Action";
import { Box, Heading } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Imagegallry from "../components/Imagegallry";
import { getImages } from "../Redux/postreducer/Action";

const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  const images=useSelector((store)=>store.getImages.images)
  useEffect(()=>{
    dispatch(getImages())
  },[dispatch])

  // const [images] = useState([
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/20220305_194925-1536x1152.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/Keratine-Jamshedpur.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/Balayage-1.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Pic-7.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Pic-2.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Pic-7.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Pic-6.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/Im-9.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Nomaan-Nadia-1-2-e1675957723282-768x427.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/20220305_194925-1536x1152.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/Keratine-Jamshedpur.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2023/02/Pic-7.jpg",
  //   "https://ariessmartsalon.com/wp-content/uploads/2022/04/20220305_194925-1536x1152.jpg",

  //   // Add more image URLs as needed
  // ]);

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
              <Imagegallry key={index} image={image.url} index={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </>
  );
};

export default Gallery;
