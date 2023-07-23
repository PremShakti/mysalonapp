import React from 'react'
import { Image } from '@chakra-ui/react'




const Imagegallry = ({image,index}) => {
  return (
    <>
            <Image w={"100%"} borderRadius={"5px"} key={index} src={image} alt={`Image ${index + 1}`} />
    </>
  )
}

export default Imagegallry
