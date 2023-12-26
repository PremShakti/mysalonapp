import React from 'react'
import { Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';




const Imagegallry = ({image,index}) => {
  const navigate=useNavigate()
  const handleMoveToGallery = () => {
    navigate("/gallery");
  };
  return (
    <>
            <Image w={"100%"} borderRadius={"5px"}  src={image} alt={`Image ${index + 1}`} onClick={handleMoveToGallery} />
    </>
  )
}

export default Imagegallry
