import { Box, Image, Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import {
  DeleteImage,
  changeImageCategary,
  getImages,
} from "../Redux/postreducer/Action";

const ImageGforAdmin = ({ image, index, id, galaryBTN }) => {
  const dispatch = useDispatch();

  const hanDelete = () => {
    dispatch(DeleteImage(id)).then(() => {
      dispatch(getImages());
    });
  };

  const handleGallerySlider = () => {
    const gtype = { categary: "GallerySliderImage" };
    dispatch(changeImageCategary(id, gtype)).then(() => {
      dispatch(getImages());
    });
  };

  const handleBannerSlider = () => {
    const data = { categary: "BannerSliderImage" };
    dispatch(changeImageCategary(id, data)).then(() => {
      dispatch(getImages());
    });
  };

  const hanGallery = () => {
    const data = { categary: "GalleryImage" };
    dispatch(changeImageCategary(id, data)).then(() => {
      dispatch(getImages());
    });
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      bg={"white"}
      p={2}
      borderRadius={10}
    >
      <Box>
        <Image
          w={"100%"}
          borderRadius={"5px"}
          src={image}
          alt={`Image ${index + 1}`}
        />
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Button
          background="linear-gradient(135deg, #5c67fd, #e733f7)"
          color={"white"}
          fontSize={"12px"}
          onClick={handleBannerSlider}
        >
          Banner Slider
        </Button>
        <Button
          background="linear-gradient(135deg, #5c67fd, #e733f7)"
          color={"white"}
          fontSize={"12px"}
          onClick={handleGallerySlider}
        >
          Gallery Slider
        </Button>
        {galaryBTN ? (
          <Button
            background="linear-gradient(135deg, #5c67fd, #e733f7)"
            color={"white"}
            fontSize={"12px"}
            onClick={hanGallery}
          >
            Gallery
          </Button>
        ) : (
          <Button
            background="linear-gradient(135deg, #5c67fd, #e733f7)"
            color={"white"}
            fontSize={"12px"}
            onClick={hanDelete}
          >
            Delete
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ImageGforAdmin;
