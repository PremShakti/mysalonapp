import React from 'react';


import Marquee from 'react-fast-marquee';
import { Box, Heading } from '@chakra-ui/react';
import ServicesHeadingcomp from './ServicesHeadingcomp';
import { useSelector } from 'react-redux';

const headlines = [
  {
    id: 1,
    text: "Headline 1",
    category: "Technology",
  },
  {
    id: 2,
    text: "Headline 2",
    category: "Sports",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  {
    id: 3,
    text: "Headline 3",
    category: "Entertainment",
  },
  // Add more headlines here as needed
];

const HeadlineSlider = () => {
  const settings = {
    infinite: true,
    speed: 2000, // Change this value to control the slide speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear', // Use linear transition for smooth movement from left to right
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    pauseOnHover: false,
  };


  const data=useSelector((store)=>store.servicesReducer.servicesData)


  return (
    <Box className="headline-sliderr" bg={"white"} color={"red"}  >
     
      <Marquee>
      {data?.map((e) => (
          <Box key={e.id}>
            {/* <Heading as={"h2"} size={"xl"} >{headline.text}</Heading> */}
            <ServicesHeadingcomp {...e}/>
          </Box>
        ))}
      </Marquee>
    </Box>
  );
};

export default HeadlineSlider;
