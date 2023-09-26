import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
      <SliderComponent defaultValue={2500} min={2000} max={20000} />
      <SliderComponent defaultValue={150} min={100} max={200} />
      <SliderComponent defaultValue={3} min={0} max={10} />
    </>
  )
}

export default SliderSelect