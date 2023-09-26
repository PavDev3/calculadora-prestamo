import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({sliderValue, setSliderValue}) => {

  const handleChange = (event) => {
    setSliderValue({...sliderValue, loanTerm: event.target.value})
    
  };
  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cuotas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sliderValue.loanTerm}
          label="Cuotas"
          onChange={handleChange}
        >
          <MenuItem value={2}>2 años</MenuItem>
          <MenuItem value={3}>3 años</MenuItem>
          <MenuItem value={4}>4 años</MenuItem>
          <MenuItem value={5}>5 años</MenuItem>
        </Select>
      </FormControl>
  )
}

export default TenureSelect