import React, { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import { headerTypeHome } from "../Redux/headerManage/Action";
import Gallerycomp from "./Gallarycomp";

const Hero = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerTypeHome());
  }, [dispatch]);
  return (
    <div>
      <Home />
      <Gallerycomp />
      <Contact />
    </div>
  );
};

export default Hero;
