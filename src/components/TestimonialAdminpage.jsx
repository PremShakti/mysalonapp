

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
 
  Stack,
  Button,
  Heading,
  
  useColorModeValue,
  Textarea,
  Spinner,
  GridItem,
  SimpleGrid,
} from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TestimonialComp from '../components/TestimonialComp'
import { getReview } from '../Redux/imagebannerslider/Action'
export default function TestimonialAdmin() {
const [name,setName]=useState("")
const [review,setReview]=useState("")
const [img,setIMG]=useState("")
const [loading,setLoding]=useState(false)

const reviews=useSelector((store)=>store.getImagesForBannerSlider.reviews)
const dispatch=useDispatch()
useEffect(()=>{
  dispatch(getReview())
},[dispatch])

const handleSubmit=()=>{
    const data={
        name,
        review,
        img
    }
   
    setLoding(true)
    axios.post(`${process.env.REACT_APP_BASE_URL}/postreview`,data)
    .then((res)=>{
      setLoding(false)
      setName("")
      setReview("")
      setIMG("")
      dispatch(getReview())
    })
}

  return (
    <>
    <Box display={"flex"} alignItems={'center'} justifyContent={"center"}>
        {loading ? (
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
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      color={"black"}
      bg={useColorModeValue('black', 'gray.800')}>
   
   

      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} color={"white"} >Post New Reviews Form</Heading>
         
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Name</FormLabel>
              <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </FormControl>
            <FormControl id="img">
              <FormLabel>Image URL</FormLabel>
              <Input value={img} type="text" onChange={(e)=>setIMG(e.target.value)} />
            </FormControl>
            <FormControl id="texts">
              <FormLabel>Reviews</FormLabel>
              
              <Textarea value={review} onChange={(e)=>setReview(e.target.value)} ></Textarea>
            </FormControl>
            <Stack spacing={10}>
              
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleSubmit} >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
     <Heading
       
     as="h2"
     size="xl"
     letterSpacing={5}
     mt={"70px"}
     mb={"50px"}
     textAlign={"center"}
     fontWeight={400}
   >
    TESTIMONIAL
   </Heading>
     <SimpleGrid columns={{base:1,lg:4}} gap={{base:2,lg:10}} w={{base:"99%",lg:"95%"}} m={"auto"}   >
         {reviews?.map((e,i)=>(<GridItem key={i}><TestimonialComp {...e} deletev={true} /></GridItem>))}
         
     </SimpleGrid>
     </>
  )
}