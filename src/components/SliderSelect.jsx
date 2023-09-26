import React from 'react'
import SliderComponent from './common/SliderComponent'

const SliderSelect = ({sliderValue, setSliderValue}) => {
  const bankLimit = 30000;
  const interesLimit = 18;
  const bankMinimum = 5000;
  const entradaMinimum = 1000;
  const prestamoMinimum = 1500;
  const interesMinimum = 2;

  return (
    <>
      <SliderComponent 
        label="Valor del coche:"
        defaultValue={sliderValue.cocheValor}
        value={sliderValue.cocheValor} 
        min={bankMinimum} 
        max={bankLimit} 
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue, 
            entrada: value * 0.2,
            prestamo: value * 0.8,
            cocheValor: value})} 
        unit={'€'}
        amount={sliderValue.cocheValor}    
      />

      <SliderComponent
        label="Entrada:" 
        defaultValue={sliderValue.entrada}
        value={sliderValue.entrada} 
        min={entradaMinimum} 
        max={sliderValue.cocheValor} 
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue,
             prestamo: (sliderValue.cocheValor - value),
             entrada: value})}
        unit={'€'}
        amount={sliderValue.entrada}
      />

      <SliderComponent
        label="Préstamo:" 
        defaultValue={sliderValue.prestamo}
        value={sliderValue.prestamo} 
        min={prestamoMinimum} 
        max={sliderValue.cocheValor}
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue,
            entrada: (sliderValue.cocheValor - value),
            prestamo: value})}
        unit={'€'}
        amount={sliderValue.prestamo}
      />

      <SliderComponent
        label="Intereses:" 
        defaultValue={sliderValue.intereses} 
        value={sliderValue.intereses}
        min={interesMinimum} 
        max={interesLimit}
        step={0.5}
        onChange={(e, value) => setSliderValue({ ...sliderValue, intereses: value})}
        unit='%'
        amount={sliderValue.intereses}
      />
     </>
  )
}

export default SliderSelect