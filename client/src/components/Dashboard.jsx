import React, { useState, useEffect } from 'react';
import getChartData from '../../services/data';
import BarChart from './BarChart';
import LineChart from './LineChart';
import PieChart from './PieChart';
import DashboardStats from './DashboardStats';
import UserGroupIcon from '@heroicons/react/24/outline/UserGroupIcon';
import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon from '@heroicons/react/24/outline/CreditCardIcon'


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



  const removerDublicateObj = (arr) => {
    const names = arr.map(({ name }) => name);
    const filtered = arr.filter(({ name }, index) => !names.includes(name, index + 1))
    return filtered
  }



  const [endYearFilter, setEndYearFilter] = useState(null);
  const [topicFilter, setTopicFilter] = useState(null);
  const [sectorFilter, setSectorFilter] = useState(null);
  const [regionFilter, setRegionFilter] = useState(null);
  const [pestFilter, setPestFilter] = useState(null);
  const [sourceFilter, setSourceFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  // ... and so on for each filter

const resetAllFilter=()=>{
  setEndYearFilter(null);
  setTopicFilter(null);
  setSectorFilter(null);
  setRegionFilter(null);
  setPestFilter(null);
  setSourceFilter(null);
  setCountryFilter(null);

}

  const filterData = (data) => {
    let filtered = [...data];

    if (endYearFilter) filtered = filtered.filter(item => item.end_year === endYearFilter);
    if (topicFilter) filtered = filtered.filter(item => item.topic === topicFilter);
    if (sectorFilter) filtered = filtered.filter(item => item.sector === sectorFilter);
    if (regionFilter) filtered = filtered.filter(item => item.region === regionFilter);
    if (pestFilter) filtered = filtered.filter(item => item.pestle === pestFilter);
    if (sourceFilter) filtered = filtered.filter(item => item.source === sourceFilter);
    // ... additional filters as needed

    return filtered;
  }

  const uniqueTopics = [...new Set(hardData.map(item => item.topic))];
  const uniqueEndYears = [...new Set(hardData.map(item => item.end_year))];
  const uniqueSectors = [...new Set(hardData.map(item => item.sector))];
  const uniqueRegions = [...new Set(hardData.map(item => item.region))];
  const uniquePESTs = [...new Set(hardData.map(item => item.pestle))];
  const uniqueSources = [...new Set(hardData.map(item => item.source))];
  const uniqueCountries = [...new Set(hardData.map(item => item.country))];


  const filteredData = filterData(hardData);


  // const sourceIntensityData = hardData.map(item => ({ name: item.topic, value1: item.end_year, value2: item.end_year, value3: item.country, value4: item.insight })).slice(0, 15);
  const sourceLikelihoodData = removerDublicateObj(filteredData.map(item => ({ name: item.source, value1: item.topic, value2: item.region, value3: item.relevance, value4: item.insight })));
  const sourceRelevanceData = removerDublicateObj(filteredData.map(item => ({ name: item.topic, value1: item.intensity, value2: item.likelihood, value3: item.relevance, }))).slice(0, 15);
  const startYearIntensityData = filteredData.map(item => ({ name: item.start_year, value: item.intensity })).slice(0, 15);


  const statsData = [
    { title: "New Users", value: "34.7k", icon: <UserGroupIcon className='w-8 h-8' />, description: "↗︎ 2300 (22%)" },
    { title: "Total Sales", value: "$34,545", icon: <CreditCardIcon className='w-8 h-8' />, description: "Current month" },
    { title: "Pending Leads", value: "450", icon: <CircleStackIcon className='w-8 h-8' />, description: "50 in hot leads" },
    { title: "Active Users", value: "5.6k", icon: <UsersIcon className='w-8 h-8' />, description: "↙ 300 (18%)" },
  ]

  return (
    <>

      <div className={`grid grid-cols-1 gap-8 w-full  mt-16 overflow-auto ${open ? 'ml-72' : 'ml-20'} bg-[#f2f2f2] `}>


        {/* <div className={`filter-section col-span-2 flex flex-row flex-wrap w-full gap-auto m-5 w-[100% - ${open ? '18rem' : '5rem'}] `}> */}

        {/** ---------------------- Different stats content 1 ------------------------- */}
        <div className={`flex w-full flex-grow flex-wrap m-5 gap-3 items-center justify-center `}>

          {/* End Year Filter */}
          <select value={endYearFilter} onChange={e => setEndYearFilter(e.target.value)}  className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto '>
            <option value="">All End Years</option>
            {uniqueEndYears.map(year => {
              if (year !== "") {
                return <option key={year} value={year}>{year}</option>
              }
            })}
          </select>

          {/* Topic Filter */}
          <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto'>
            <option value="">All Topics</option>
            {uniqueTopics.map(topic => {
              if (topic !== "") {
                return <option key={topic} value={topic}>{topic}</option>
              }
            })}
          </select>

          {/* Sector Filter */}
          <select value={sectorFilter} onChange={e => setSectorFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto'>
            <option value="">All Sectors</option>
            {uniqueSectors.map(sector => {
              if (sector !== "") {
                return <option key={sector} value={sector}>{sector}</option>
              }
            })}
          </select>

          {/* Region Filter */}
          <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto'>
            <option value="">All Regions</option>
            {uniqueRegions.map(region => {
              if (region !== "") {
                return <option key={region} value={region}>{region}</option>
              }
            })}
          </select>

          {/* PEST Filter */}
          <select value={pestFilter} onChange={e => setPESTFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto'>
            <option value="">All PESTs</option>
            {uniquePESTs.map(pest => {
              if (pest !== "") {
                return <option key={pest} value={pest}>{pest}</option>
              }
            })}
          </select>

          {/* Source Filter */}
          <select value={sourceFilter} onChange={e => setSourceFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto'>
            <option value="">All Sources</option>
            {uniqueSources.map(source => {
              if (source !== "") {
                return <option key={source} value={source}>{source}</option>
              }
            })}
          </select>

          {/* Country Filter */}
          <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className='shadow-md rounded-md px-2 py-2 font-serif text-slate-700 w-40 mr-auto ml-auto '>
            <option value="">All Countries</option>
            {uniqueCountries.map(country => {
              if (country !== "") {
                return <option key={country} value={country}>{country}</option>
              }
            })}
          </select>
          {/* <button onClick={resetAllFilter}></button> */}
        </div><br />
        <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6 mx-6 mr-0">
          {
            statsData.map((d, k) => {
              return (
                <DashboardStats key={k} {...d} colorIndex={k} />
              )
            })
          }
        </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 p-4 flex justify-center overflow-hidden bg-white">
          <LineChart data={sourceRelevanceData} />
        </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 p-4 flex justify-center overflow-hidden bg-white">
          <BarChart data={sourceLikelihoodData} />

        </div>
        <div className="col-span-2 shadow-xl rounded-xl border mx-6 flex justify-center overflow-hidden bg-white">
          <PieChart data={startYearIntensityData} open={open} />
        </div>
      </div >

    </>
  );
}
export default Dashboard;

