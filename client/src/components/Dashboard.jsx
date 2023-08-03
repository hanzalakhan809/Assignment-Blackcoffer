import React, { useState, useEffect } from 'react';
import getChartData from '../../services/data';
import BarChart from './BarChart';
import LineChart from './LineChart';
import DoughnutChart from './DoughnutChart';

import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController, LineElement } from 'chart.js'
import NavBar from './Navbar';

ChartJS.register(BarElement, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController, LineElement);

// rest of your code ...

function Dashboard() {
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

  const generateChartData = (dataKey) => {
    return {
      labels: hardData.map(item => item[dataKey]),
      datasets: [{
        label: 'Intensity',
        data: hardData.map(item => item.intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    };
  }

  const sourceIntensityData = generateChartData('source');
  const sourceLikelihoodData = generateChartData('likelihood');
  const sourceRelevanceData = generateChartData('relevance');
  const startYearIntensityData = generateChartData('start_year');
  // Continue for other data variables...

  return (<>

    <NavBar />
    <div className="grid grid-cols-3 gap-4 m-4">
      <div className="col-span-1">
        <BarChart data={sourceIntensityData} />
      </div>
      <div className="col-span-1">
        <BarChart data={sourceLikelihoodData} />
      </div>
      <div className="col-span-1">
        <LineChart data={sourceRelevanceData} />
      </div>
      <div className="col-span-1">
        <DoughnutChart data={startYearIntensityData} />
      </div>
      {/* ... Other chart instances ... */}
    </div>
  </>
  );
}
export default Dashboard;

