import React, { useState } from 'react'
import ServicesList from './ServicesList'
import { Box, Heading } from '@chakra-ui/react'

const MasterServicesComp = ({ServiceFor,data}) => {
  
  return (
    <Box w={{base:"100%",lg:"48%"}}  >
    <Heading as={"h4"} size={{base:"md",lg:"lg"}} textAlign={"center"} mt={6} mb={4} fontFamily={"Cormorant,serif"} >{ServiceFor}</Heading>

    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} p={2} gap={{base:2,lg:10}}  w={"100%"} >
      {data?.map((e,i)=>(<ServicesList {...e} />))}
    </Box>
    </Box>
  )
}

export default MasterServicesComp
