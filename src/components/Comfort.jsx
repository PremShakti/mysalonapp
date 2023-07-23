import { GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardForComfor from './CardForComfor'

const Comfort = () => {
  return (
    <SimpleGrid>
      <GridItem><CardForComfor/> </GridItem>
    </SimpleGrid>
  )
}

export default Comfort
