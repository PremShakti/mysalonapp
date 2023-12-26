import { Box } from "@chakra-ui/react";
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageGforAdmin from "./ImageGforAdmin";
import { useSelector } from "react-redux";

const GallerysliderAdmin = ({ imgType }) => {
  const images = useSelector((store) => store.getImages.images);
  const GallerySliderImage = images.filter((item) => item.categary === imgType);
  
  return (
    <Box>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 3, 750: 4, 900: 4 }}>
        <Masonry gutter="15px">
          {GallerySliderImage?.map((image, index) => (
            <ImageGforAdmin
              key={index}
              image={image.url}
              index={index}
              id={image._id}
              galaryBTN={true}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </Box>
  );
};

export default GallerysliderAdmin;
