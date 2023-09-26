import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = () => {
  return (
    <>
      <SliderComponent 
      label="Valor del coche:"
      defaultValue={12000} 
      min={5000} 
      max={30000} 
      step={100} 
      onChange={(event, value) => console.log(value)}
      unit={'€'}
      //amout={}
      
      />

      <SliderComponent
      label="Entrada:" 
      defaultValue={3000} 
      min={1000} 
      max={8000} 
      step={100}
      unit={'€'}
      //amout={}
      />

      <SliderComponent
      label="Préstamo:" 
      defaultValue={3000} 
      min={1500} 
      max={29000}
      step={100}
      unit={'€'}
      //amout={}
      />

      <SliderComponent
      label="Intereses:" 
      defaultValue={3} 
      min={0} 
      max={10}
      step={1}
      unit={'%'}
      //amout={}
      />
    </>
  )
}

export default SliderSelect