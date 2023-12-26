

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { gettoken, login } from '../Redux/Authentication/Action'

export default function Login() {

  const [user,SetUser]=useState()
  const [pass,SetPass]=useState()

  const dispatch=useDispatch()
const navigate=useNavigate()
const location=useLocation()

let isAuth=useSelector((store)=>store.authReducer.token)



const submit=()=>{
  let data={
    user,
    pass
  }
dispatch(login(data)).then(()=>{
  console.log(isAuth)
navigate(location.state)

})

}
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      color={"black"}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Admin Login
        </Heading>
        <FormControl  isRequired>
          <FormLabel>Admin User Name</FormLabel>
          <Input
            onChange={(e)=>SetUser(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" onChange={(e)=>SetPass(e.target.value)}/>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }} onClick={submit} >
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}