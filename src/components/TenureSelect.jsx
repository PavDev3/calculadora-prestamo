import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = () => {

  const [cuotas, setCuotas] = useState('');

  const handleChange = (event) => {
    setCuotas(event.target.value);
  };
  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Cuotas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={cuotas}
          label="Cuotas"
          onChange={handleChange}
        >
          <MenuItem value={24}>24 meses</MenuItem>
          <MenuItem value={36}>36 meses</MenuItem>
          <MenuItem value={48}>48 meses</MenuItem>
        </Select>
      </FormControl>
  )
}

export default TenureSelect