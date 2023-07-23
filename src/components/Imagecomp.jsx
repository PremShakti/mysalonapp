import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Imagecomp = ({src,i}) => {
  return (
    <Box overflow={"hidden"} w={"250px"} height={"250px"} >
      <Image src={src} alt={i+1} w={"100%"} />
    </Box>
  )
}

export default Imagecomp
