import React, { useState, useEffect } from 'react';
import getChartData from '../services/data';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController, LineElement } from 'chart.js'

ChartJS.register(BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController, LineElement);

// rest of your code ...

function App() {
  let data = [{
    _id: "64ca4be9d11c03e8cb2720c5",
    end_year: "",
    intensity: 6,
    sector: "Energy",
    topic: "gas",
    insight: "Annual Energy Outlook",
    url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    region: "Northern America",
    start_year: "",
    impact: "",
    added: "January, 20 2017 03:51:25",
    published: "January, 09 2017 00:00:00",
    country: "United States of America",
    relevance: 2,
    pestle: "Industries",
    source: "EIA",
    title: "U.S. natural gas consumption is expected to increase during much of the projection period.",
    likelihood: 3,
    __v: 0
  }, {
    _id: "64ca4be9d11c03e8cb2720c5",
    end_year: "",
    intensity: 6,
    sector: "Energy",
    topic: "gas",
    insight: "Annual Energy Outlook",
    url: "http://www.eia.gov/outlooks/aeo/pdf/0383(2017).pdf",
    region: "Northern America",
    start_year: "",
    impact: "",
    added: "January, 20 2017 03:51:25",
    published: "January, 09 2017 00:00:00",
    country: "United States of America",
    relevance: 2,
    pestle: "Industries",
    source: "EIA",
    title: "U.S. natural gas consumption is expected to increase during much of the projection period.",
    likelihood: 3,
    __v: 0
  }];
  const [hardData, setHardData] = useState(data);

  useEffect(() => {
    getChartData().then((res) => {
      console.log(res); // log the response to verify the data

      setHardData(res);

    }).catch(err => {
      console.error(err); // log any errors
    })
  }, []);

  const generateChartData = (dataKey, label, type = 'bar') => {
    const data = {
      labels: hardData.map(item => item[dataKey]),
      datasets: [{
        label: label,
        data: hardData.map(item => item.intensity),
        backgroundColor: type === 'bar' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.2)',
        borderColor: type === 'bar' ? undefined : 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: dataKey
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

    if (type === 'doughnut') {
      return <Doughnut data={data} options={options} />;
    } else if (type === 'line') {
      return <Line data={data} options={options} />;
    } else {
      return <Bar data={data} options={options} />;
    }
  
  }

  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="col-span-1">
        {generateChartData('source', 'Intensity')}
      </div>
      <div className="col-span-1">
        {generateChartData('source', 'Likelihood')}
      </div>
      <div className="col-span-1">
        {generateChartData('source', 'Relevance', 'line')}
      </div>
      <div className="col-span-1">
        {generateChartData('start_year', 'Intensity per Year', 'line')}
      </div>
      <div className="col-span-1">
        {generateChartData('country', 'Intensity per Country')}
      </div>
      <div className="col-span-1">
        {generateChartData('topic', 'Intensity per Topic')}
      </div>
      <div className="col-span-1">
        {generateChartData('region', 'Intensity per Region')}
      </div>
      <div className="col-span-1">
        {generateChartData('city', 'Intensity per City')}
      </div>
    </div>
  );
}
export default App;

