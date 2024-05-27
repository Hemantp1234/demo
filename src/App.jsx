import React,{useEffect}from 'react'
import Header from './header.jsx'
import { getMarketData,getSectorPerformance,fetchChartData,fetchMarketIndices } from './services/api';
import MarketSummary from './marketSummary.jsx';
import MarketOverview from './marketOverview.jsx';
import SideBar from './Sidebar.jsx';
import './index.css'


function App() {
  useEffect(() => {
    async function fetchData() {
      const marketSummary = await getMarketData();
      console.log('Market Summary Data:', marketSummary);

      const sectorPerfomance = await getSectorPerformance();
      console.log('Sector perfonace is :',sectorPerfomance);

      const marketData = await fetchMarketIndices();
      console.log("Market data is :",marketData);

      const chartData = await fetchChartData();
      console.log("Chart data is :",chartData);
    }
    fetchData();
  }, []);
  
  return (
    <>
    <div className="full-part">
    
    <SideBar/>
    
    
    <div className="second-part">
      <Header/>
      <MarketSummary/>
      <h4 style={{color:'#606569',
        position:'relative',
        left:'135px',
        top:'40px'

      }}>Market</h4>
      <MarketOverview/>
    </div>
      
      
    </div>
    
      
      
    </>
  )
}

export default App
