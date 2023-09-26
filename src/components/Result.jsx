import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({sliderValue}) => {
  const {cocheValor, prestamo, intereses, cuotas} = sliderValue;

  const prestamoMeses = cuotas;
  const interesesPorMes = intereses / 100 / 12;

  const cuotaMensual =
    (prestamo * interesesPorMes * (1 + interesesPorMes ) ** prestamoMeses ) / ((1 + interesesPorMes) ** prestamoMeses - 1);

   const pieChartData = {
      labels: ['Prestamo', 'Intereses'],
      datasets: [
        {
          label: 'Relación entre prestamo e intereses  ',
          data: [cocheValor, cuotaMensual],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  


  return (
  <Stack gap={3}>
    <Typography textAlign='center' variant='h5'>
      Cuota Mensual: {cuotaMensual.toFixed(2)}€
    </Typography>
    <Stack direction='row' justifyContent='center'>
      <div>
        <Pie data={pieChartData} />
      </div>
    </Stack> 
  </Stack>
  )
}

export default Result