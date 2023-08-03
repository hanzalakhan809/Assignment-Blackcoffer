import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ data }) {
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

  return <Line data={data} options={options} />;
}

export default LineChart;
