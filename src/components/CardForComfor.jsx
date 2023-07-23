import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const CardForComfor = ({src,i}) => {
  return (
    <Box  >
        <Image src={src} alt={i+1} />
        <Box>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vero dolorem, facere incidunt quidem rerum odit reiciendis tempora officia soluta! Repudiandae, aliquid reiciendis mollitia voluptatem quisquam corrupti incidunt amet, rem quibusdam quidem, aut impedit dolor! Voluptas eligendi facere tempora recusandae deleniti animi magni perspiciatis et autem, delectus saepe nesciunt ullam?</Text>
        </Box>
      
    </Box>
  )
}

export default CardForComfor
