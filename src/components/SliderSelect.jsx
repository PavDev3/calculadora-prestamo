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
        defaultValue={sliderValue.carValue}
        value={sliderValue.carValue} 
        min={bankMinimum} 
        max={bankLimit} 
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue,
            carValue: value.toFixed(0), 
            downPayment: (0.2 * value).toFixed(0),
            loanAmount: (0.8 * value).toFixed(0),
            })} 
        unit={'€'}
        amount={sliderValue.carValue}    
      />

      <SliderComponent
        label="Entrada:" 
        defaultValue={sliderValue.downPayment}
        value={sliderValue.downPayment} 
        min={entradaMinimum} 
        max={sliderValue.carValue} 
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue,
            downPayment: value.toFixed(0),
            loanAmount: (sliderValue.carValue - value).toFixed(0),
          })}
        unit={'€'}
        amount={sliderValue.downPayment}
      />

      <SliderComponent
        label="Préstamo:" 
        defaultValue={sliderValue.loanAmount}
        value={sliderValue.loanAmount} 
        min={prestamoMinimum} 
        max={sliderValue.carValue}
        step={100}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue,
            loanAmount: value.toFixed(0),
            downPayment: (sliderValue.carValue - value).toFixed(0),
          })}
        unit={'€'}
        amount={sliderValue.loanAmount}
      />

      <SliderComponent
        label="Intereses:" 
        defaultValue={sliderValue.interestRate} 
        value={sliderValue.interestRate}
        min={interesMinimum} 
        max={interesLimit}
        step={0.5}
        onChange={(e, value) => 
          setSliderValue({ 
            ...sliderValue, 
            interestRate: value.toFixed(0)})}
        unit='%'
        amount={sliderValue.interestRate}
      />
     </>
  )
}

export default SliderSelect