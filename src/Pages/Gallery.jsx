import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { HeaderTypeOther } from "../Redux/headerManage/Action";
import { Box } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Imagegallry from "../components/Imagegallry";

const Gallery = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  const [images] = useState([
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181522/pexels-photo-1181522.jpeg?auto=compress&cs=tinysrgb&w=600",
    // Add more image URLs as needed
  ]);

  return (
    <>
      <Box
        w={{ base: "99%", lg: "90%" }}
        m={"auto"}
        mt={"10px"}
        p={3}
        className="galary-page"
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="15px">
            {images.map((image, index) => (
              <Imagegallry key={index} image={image} index={index} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
    </>
  );
};

export default Gallery;
