import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const ServicesList = ({name,price}) => {
  return (
    <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px dotted #7a7a7a"} w={"100%"} fontFamily={"Cormorant,serif"} >
      <Text  letterSpacing={2} fontSize={{base:15,lg:20}} >{name}</Text>
      <Text>$ {price}</Text>
    </Box>
  )
}

export default ServicesList
