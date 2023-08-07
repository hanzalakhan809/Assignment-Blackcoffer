import React, { useState, useEffect } from 'react';
import getChartData from '../../services/data';
import BarChart from './charts/BarChart';
import LineChart from './charts/LineChart';
import PieChart from './charts/PieChart';
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

  const { open } = props;
  const [hardData, setHardData] = useState(data);

  const [endYearFilter, setEndYearFilter] = useState(null);
  const [topicFilter, setTopicFilter] = useState(null);
  const [sectorFilter, setSectorFilter] = useState(null);
  const [regionFilter, setRegionFilter] = useState(null);
  const [pestFilter, setPestFilter] = useState(null);
  const [sourceFilter, setSourceFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);


  useEffect(() => {
    getChartData().then((res) => {
      console.log(res);

      setHardData(res);

    }).catch(err => {
      console.error(err);
    })
  }, []);



  const removerDublicateObj = (arr) => {
    const names = arr.map(({ name }) => name);
    const filtered = arr.filter(({ name }, index) => !names.includes(name, index + 1))
    return filtered
  }


  // const resetAllFilter=()=>{
  //   setEndYearFilter(null);
  //   setTopicFilter(null);
  //   setSectorFilter(null);
  //   setRegionFilter(null);
  //   setPestFilter(null);
  //   setSourceFilter(null);
  //   setCountryFilter(null);

  // }

  const filterData = (data) => {
    let filtered = [...data];

    if (endYearFilter) filtered = filtered.filter(item => item.end_year === endYearFilter);
    if (topicFilter) filtered = filtered.filter(item => item.topic === topicFilter);
    if (sectorFilter) filtered = filtered.filter(item => item.sector === sectorFilter);
    if (regionFilter) filtered = filtered.filter(item => item.region === regionFilter);
    if (pestFilter) filtered = filtered.filter(item => item.pestle === pestFilter);
    if (sourceFilter) filtered = filtered.filter(item => item.source === sourceFilter);

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


  const sourceLikelihoodData = removerDublicateObj(filteredData.map(item => ({ name: item.source, topic: item.topic, region: item.region, relevance: item.relevance, insight: item.insight }))).slice(0, 15);
  const sourceRelevanceData = removerDublicateObj(filteredData.map(item => ({ name: item.topic, intensity: item.intensity, likelihood: item.likelihood, relevance: item.relevance, }))).slice(0, 15);
  const startYearIntensityData = filteredData.map(item => ({ name: item.start_year, value: item.intensity })).slice(0, 15);


  const statsData = [
    { title: "Countries", value: "36", icon: <UserGroupIcon className='w-8 h-8' />, description: "↗︎ Usage (22%)" },
    { title: "Sources", value: "150", icon: <CreditCardIcon className='w-8 h-8' />, description: "Current Year" },
    { title: "Topic", value: "57", icon: <CircleStackIcon className='w-8 h-8' />, description: "50 in hot Topics" },
    { title: "Sectors", value: "14", icon: <UsersIcon className='w-8 h-8' />, description: "↙ Usage (18%)" },
  ]

  return (
    <>
      <div className={`grid grid-cols-1 gap-8 w-full  mt-16 overflow-auto ${open ? 'ml-72' : 'ml-20'} bg-[#f2f2f2] `}>
        <div className={`stats shadow py-6 flex w-auto flex-grow flex-wrap mx-5 mt-5 mb-0 mr-0 gap-3 items-center justify-center `}>
        
          {/* End Year Filter */}
          <select value={endYearFilter} onChange={e => setEndYearFilter(e.target.value)} className=' stat shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto '>
            <option value="">All End Years</option>
            {uniqueEndYears.map(year => {
              if (year !== "") {
                return <option key={year} value={year}>{year}</option>
              }
            })}
          </select>

          {/* Topic Filter */}
          <select value={topicFilter} onChange={e => setTopicFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto'>
            <option value="">All Topics</option>
            {uniqueTopics.map(topic => {
              if (topic !== "") {
                return <option key={topic} value={topic}>{topic}</option>
              }
            })}
          </select>

          {/* Sector Filter */}
          <select value={sectorFilter} onChange={e => setSectorFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto'>
            <option value="">All Sectors</option>
            {uniqueSectors.map(sector => {
              if (sector !== "") {
                return <option key={sector} value={sector}>{sector}</option>
              }
            })}
          </select>

          {/* Region Filter */}
          <select value={regionFilter} onChange={e => setRegionFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto'>
            <option value="">All Regions</option>
            {uniqueRegions.map(region => {
              if (region !== "") {
                return <option key={region} value={region}>{region}</option>
              }
            })}
          </select>

          {/* PEST Filter */}
          <select value={pestFilter} onChange={e => setPESTFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto'>
            <option value="">All PESTs</option>
            {uniquePESTs.map((pest,index) => {
              if (pest !== "") {
                return <option key={index} value={pest}>{pest}</option>
              }
            })}
          </select>

          {/* Source Filter */}
          <select value={sourceFilter} onChange={e => setSourceFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto'>
            <option value="">All Sources</option>
            {uniqueSources.map((source,index) => {
              if (source !== "") {
                return <option key={index} value={source}>{source}</option>
              }
            })}
          </select>

          {/* Country Filter */}
          <select value={countryFilter} onChange={e => setCountryFilter(e.target.value)} className='shadow rounded-md px-2 py-2 font-serif text-slate-700 w-36 mr-auto ml-auto '>
            <option value="">All Countries</option>
            {uniqueCountries.map(country => {
              if (country !== "") {
                return <option key={country} value={country}>{country}</option>
              }
            })}
          </select>
        </div>
        <br />
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

