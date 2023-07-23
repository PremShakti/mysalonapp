import React from 'react'

const SliderImage = ({src,i}) => {
  return (
    <>
      <img src={src} alt={i+Math.random()} />
    </>
  )
}

export default SliderImage
