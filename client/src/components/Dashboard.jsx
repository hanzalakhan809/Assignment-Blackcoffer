import React, { useState, useEffect } from 'react';
import getChartData from '../../services/data';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import DashboardStats from './DashboardStats';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'


function Dashboard(props) {
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
  const { open } = props;

  useEffect(() => {
    getChartData().then((res) => {
      console.log(res); // log the response to verify the data

      setHardData(res);

    }).catch(err => {
      console.error(err); // log any errors
    })
  }, []);

 

const removerDublicateObj=(arr)=>{
  const names = arr.map(({ name }) => name);
  const filtered = arr.filter(({ name }, index) => !names.includes(name, index + 1))
  return filtered
}

  const sourceIntensityData  = hardData.map(item => ({ name: item.topic, value1: item.end_year,value2:item.end_year,value3: item.country,value4:item.insight })).slice(0, 10);
  const sourceLikelihoodData = removerDublicateObj(hardData.map(item => ({ name: item.source, value1: item.topic,value2:item.region,value3: item.relevance,value4:item.insight })).slice(0,10));
  const sourceRelevanceData = removerDublicateObj(hardData.map(item => ({ name: item.topic , value1: item.intensity,value2:item.likelihood,value3: item.relevance, }))).slice(0,10);
  const startYearIntensityData = hardData.map(item => ({ name: item.start_year, value: item.intensity })).slice(0, 10);
 

  const statsData = [
    {title : "New Users", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
    {title : "Pending Leads", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
    {title : "Active Users", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]


  return (
    <>

      <div className={`grid grid-cols-1 gap-8 w-full h-auto mt-16 overflow-auto ${open? 'ml-72':'ml-20'} bg-[#f2f2f2] `}>
          {/** ---------------------- Different stats content 1 ------------------------- */}
          <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6 mx-6">
                {
                    statsData.map((d, k) => {
                        return (
                            <DashboardStats key={k} {...d} colorIndex={k}/>
                        )
                    })
                }
            </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 p-4 flex justify-center overflow-hidden bg-[#fffff]">
          <LineChart data={sourceRelevanceData} />
        </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 p-4 flex justify-center overflow-hidden bg-[#fffff]">
          <BarChart data={sourceLikelihoodData} />
          
        </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 p-4 flex justify-center overflow-hidden bg-[#fffff]">
          <PieChart data={startYearIntensityData} className="ml-8" />
        </div>
      </div>
      <div>
      
      </div>

    </>
  );
}
export default Dashboard;

