import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

const Header = ({ headerType }) => {
  const [list, Setlist] = useState(false);

  const handleListView = () => {
    Setlist(!list);
  };
  return (
    <Box
      position={"sticky"}
      top={0}
      zIndex={10000}
      // bg={"rgb(85, 85, 255)"}
      // bg={"rgb(255, 255, 255)"}
      backdropFilter="blur(8px)"
      
      boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
    >
      <Flex w={"100%"} h={"70px"} align={"center"} justify={"center"}>
        <Flex
          w={{ base: "95%", lg: "90%" }}
          h={"60px"}
          align={"center"}
          justifyContent={"space-between"}
        >
          {/* <Text
            as={"h1"}
            fontSize={30}
            fontWeight={"bold"}
            color={"rgb(255,215,0)"}
          >
            Ariess Mart Salon
          </Text> */}
          <Box w={"90px"} >  <Image src="/logo.png" alt="logo" w={"100%"} /></Box>
          {!headerType ? (
            <UnorderedList
              display={{ base: "none", lg: "flex" }}
              listStyleType={"none"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontSize={"large"}
              fontFamily={"sans-serif"}
              // color={"#9b9000"}
              
      
            >
              <ListItem  >
                <Link to="home" spy={true} smooth={true} duration={500} >
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link to="gallery" spy={true} smooth={true} duration={500}>
                  Gallery
                </Link>
              </ListItem>

              <ListItem>
                <NavLink to={"/services"} spy={true} smooth={true} duration={500}>
                  Services
                </NavLink>
              </ListItem>
              <ListItem>
                <Link to="about" spy={true} smooth={true} duration={500}>
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link to="contact" spy={true} smooth={true} duration={500}>
                  Contact
                </Link>
              </ListItem>
            </UnorderedList>
          ) : (
            <UnorderedList
              display={{ base: "none", lg: "flex" }}
              listStyleType={"none"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={10}
              cursor={"pointer"}
              fontWeight={"bold"}
              fontSize={"large"}
            >
              <ListItem>
                <NavLink to={"/"}>Home</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/gallery"}>Gallery</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/services"}  >Services</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>About</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={"/"}>Contact</NavLink>
              </ListItem>
            </UnorderedList>
          )}

          <Box
            display={{ base: "block", lg: "none" }}
            fontSize={25}
            onClick={handleListView}
          >
            <GiHamburgerMenu />
          </Box>
        </Flex>
      </Flex>

      <Box
        display={{ base: "flex", lg: "none" }}
        h={"100vh"}
        flexDirection={"column"}
        position={"fixed"}
        top={"70px"}
        left={0}
        zIndex={1000}
        // transform={list ? "translateX(0%)" : "translateX(-100%)"}
        height={list ? "400px" : "0px"}
        overflow={"hidden"}
        // transition={"transform 250ms ease-in-out"}
        transition={"height 350ms ease-in-out"}
        gap={7}
        // bg={"rgb(228, 194, 0)"}
        bg={"black"}
        w={"100%"}
        color={"white"}
        fontWeight={"bold"}
        cursor={"pointer"}
      >
        {!headerType ? (
          <UnorderedList
            listStyleType={"none"}
            spacing={5}
            cursor={"pointer"}
            fontSize={"large"}
            fontWeight={"bold"}
          >
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleListView}
              >
                Home
              </Link>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <Link
                to="gallery"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleListView}
              >
                Gallery
              </Link>
            </ListItem>

            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <NavLink
                to={"/services"}
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleListView}
              >
                Services
              </NavLink>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleListView}
              >
                About
              </Link>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick={handleListView}
              >
                Contact
              </Link>
            </ListItem>
          </UnorderedList>
        ) : (
          <UnorderedList
            listStyleType={"none"}
            cursor={"pointer"}
            fontWeight={"bold"}
            fontSize={"large"}
          >
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <NavLink to="/" onClick={handleListView}>
                Home
              </NavLink>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <NavLink to="/gallery" onClick={handleListView}>
                Gallery
              </NavLink>
            </ListItem>

            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <NavLink to="/services" onClick={handleListView}>
                Services
              </NavLink>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <Link to="/" onClick={handleListView}>
                About
              </Link>
            </ListItem>
            <ListItem
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"1px dotted white"}
              h={12}
            >
              <NavLink to="/" onClick={handleListView}>
                Contact
              </NavLink>
            </ListItem>
          </UnorderedList>
        )}
      </Box>
    </Box>
  );
};

export default Header;
