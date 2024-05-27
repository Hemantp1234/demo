import React, { useEffect, useState } from 'react';
import { fetchMarketIndices } from './services/api';
import './index.css';
import ChartSection from './chartSection';

const MarketOverview = () => {
  const [marketIndices, setMarketIndices] = useState([]);

  useEffect(() => {
    const getMarketIndices = async () => {
      try {
        const data = await fetchMarketIndices();
        setMarketIndices(data);
      } catch (error) {
        console.error('Error fetching market indices data:', error);
      }
    };

    getMarketIndices();
  }, []);

  return (
    <div className='overall-view'>
      <div className="market-view">
        <div className="market-indices">
        <div className="head-table">
  <table>
    <tbody>
      {marketIndices.map((index) => (
        <tr key={index.symbol} className="table-row">
          <td>{index.symbol}</td>
          <td>{index.currentValue}</td>
          {/* Apply conditional styling based on daily change */}
          <td style={{ color: index.dailyChange >= 0 ? 'green' : 'red' }}>
            {index.dailyChange}
          </td>
          {/* Apply conditional styling based on percentage change */}
          <td
            style={{
              color: index.percentageChange >= 0 ? 'green' : 'red',
              backgroundColor: index.percentageChange >= 0 ? 'lightgreen' : 'lightcoral',
              borderRadius: '10px'
            }}
          >
            {index.percentageChange}%
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        
        </div>
        
      </div>
      <div className="chart-view">
        <ChartSection />
      </div>
    </div>
  );
};

export default MarketOverview;
