import { useState } from "react";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";
import Result from "./components/Result";
import TenureSelect from "./components/TenureSelect";
import { Container, Grid } from "@mui/material";


function App() {
  const [sliderValue, setSliderValue] = useState({
    cocheValor: 3000,
    entrada: 3000 * 0.2,
    prestamo: 3000 * 0.8,
    intereses: 3,
    
  }); 

  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="md" sx={{mt: 8}}>

        {/* {Tenemos dos grid para separar, los sliders del resultado} */}
        <Grid container spacing={5}>
          
          <Grid item xs={12} md={6}>    
            <SliderSelect sliderValue={sliderValue} setSliderValue={setSliderValue}/>
            <TenureSelect/>
          </Grid>

          <Grid item xs={12} md={6}>    
            <Result/>
          </Grid>
 
        </Grid>
      </Container>
    </div>
  );
}

export default App;
