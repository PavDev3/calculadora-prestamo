import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";


function App() {
  const [sliderValue, setSliderValue] = useState({
    carValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
    
  }); 

  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="md" sx={{mt: 8}}>

        {/* {Tenemos dos grid para separar, los sliders del resultado} */}
        <Grid container spacing={5} alignItems='center'>
          
          <Grid item xs={12} md={6}>    
            <SliderSelect sliderValue={sliderValue} setSliderValue={setSliderValue}/>
            <TenureSelect sliderValue={sliderValue} setSliderValue={setSliderValue}/>
          </Grid>

          <Grid item xs={12} md={6}>    
            <Result sliderValue={sliderValue} setSliderValue={setSliderValue}/>
          </Grid>
 
        </Grid>
      </Container>
    </div>
  );
}

export default App;
