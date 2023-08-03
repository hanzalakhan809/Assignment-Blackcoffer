import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart({ data }) {
  const options = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Source'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
