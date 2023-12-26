import { Box, Heading, Spinner, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { HeaderTypeOther } from "../Redux/headerManage/Action";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageGforAdmin from "../components/ImageGforAdmin";
import { getImages, postImages } from "../Redux/postreducer/Action";
import GallerysliderAdmin from "../components/GallerysliderAdmin";

import { useNavigate } from "react-router-dom";
import TestimonialAdmin from "../components/TestimonialAdminpage";

const Admin = () => {
  const [url, SeturlOfimage] = useState("");
  const [categary, Setcategary] = useState("GalleryImage");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.getImages.images);
  const spiner = useSelector((store) => store.getImages.isLoading);
  const spiner2 = useSelector((store) => store.getImages.updateRequest);
  const spiner3 = useSelector((store) => store.getImages.deleteRequest);
  const spiner4 = useSelector((store) => store.getImages.postimageRequest);

  useEffect(() => {
    dispatch(HeaderTypeOther());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      url,
      categary,
    };
    dispatch(postImages(data)).then(() => {
      SeturlOfimage(" ");
      alert("Post Image Successfull");
      dispatch(getImages());
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const [changepage, setChange] = useState("Gallery");

  return (
    <Box>
      <Button
        position={"fixed"}
        right={1}
        bottom={3}
        background="linear-gradient(135deg, #fd5c5c, #e733f7)"
        color={"white"}
        fontSize={"15px"}
        onClick={handleLogout}
      >
        Logout
      </Button>

      <Heading
        as={"h2"}
        size={"xl"}
        textAlign={"center"}
        color={"rgb(255,215,0)"}
        mt={6}
        mb={5}
      >
        Admin Page
      </Heading>
      <hr style={{ border: "1px dotted white", marginBottom: "40px" }} />
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
        {spiner || spiner4 ? (
          <Spinner
            thickness="6px"
            speed="0.35s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            textAlign={"center"}
          />
        ) : null}
      </Box>

      <select  id="change" onChange={(e) => setChange(e.target.value)} style={{background:"#444444",padding:"7px",display:"block",margin:"auto"}} >
        <option value="Gallery">Gallery</option>
        <option value="CustomerReview">Customer Review</option>
      </select>

      {changepage == "CustomerReview" ? (
        <TestimonialAdmin />
      ) : (
        <>
          <form action="" className="admin-form" onSubmit={handleSubmit}>
            <label>Image for Banner Slider</label>
            <input
              type="text"
              placeholder="Image url"
              value={url}
              onChange={(e) => SeturlOfimage(e.target.value)}
            />

            <label>Select Image Type</label>
            <select name="" id="" onChange={(e) => Setcategary(e.target.value)}>
              <option value="GalleryImage">Gallery Image</option>
              <option value="BannerSliderImage">Banner Slider Image</option>
              <option value="GallerySliderImage">Gallery Slider Image</option>
            </select>
            <button type="submit">submit</button>
          </form>

          <Box pt={5} pb={5} mb={7} background={"#1b1b1b"}>
            <Heading
              as={"h2"}
              size={"xl"}
              color={"white"}
              mb={9}
              textAlign={"center"}
            >
              Banner Slider Image
            </Heading>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {spiner2 ? (
                <Spinner
                  thickness="6px"
                  speed="0.35s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                  textAlign={"center"}
                />
              ) : null}
            </Box>

            <GallerysliderAdmin imgType="BannerSliderImage" />
          </Box>

          <Box pt={5} pb={5} mb={7} background={"#1b1b1b"}>
            <Heading
              as={"h2"}
              size={"xl"}
              color={"white"}
              mb={9}
              textAlign={"center"}
            >
              Gallery Slider Image
            </Heading>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {spiner2 ? (
                <Spinner
                  thickness="6px"
                  speed="0.35s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                  textAlign={"center"}
                />
              ) : null}
            </Box>

            <GallerysliderAdmin imgType="GallerySliderImage" />
          </Box>

          <Heading
            as={"h2"}
            size={"xl"}
            color={"white"}
            mb={9}
            textAlign={"center"}
          >
            Gallery Image
          </Heading>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            {spiner3 || spiner2 || spiner ? (
              <Spinner
                thickness="6px"
                speed="0.35s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
                textAlign={"center"}
              />
            ) : null}
          </Box>
          <Box>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
            >
              <Masonry gutter="15px">
                {data?.map((image, index) => (
                  <ImageGforAdmin
                    key={index}
                    image={image.url}
                    index={index}
                    id={image._id}
                    galaryBTN={false}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Admin;
