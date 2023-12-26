import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

const ServicesHeadingcomp = ({name,categary}) => {
  return (
    <Box pt={2}pb={2} >
      <Heading as={"h2"} size={"lg"} ml={20} mr={20} >{name} <span style={{fontSize:"25px",marginLeft:"10px"}}>{`(${categary})` }</span> </Heading>
    </Box>
  )
}

export default ServicesHeadingcomp
