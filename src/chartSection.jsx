import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { fetchChartData } from './services/api';

const ChartSection = () => {
  const [chartData, setChartData] = useState([]);
  const [timeRange, setTimeRange] = useState('1m');
  const [symbol, setSymbol] = useState('SPY'); // Default symbol

  const timeRanges = ['1d', '5d', '1m', '3m', '6m', '1y', '2y', '5y', '10y', 'ytd'];

  useEffect(() => {
    const getChartData = async () => {
      try {
        const data = await fetchChartData(symbol, timeRange);
        setChartData(data);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    getChartData();
  }, [symbol, timeRange]);

  return (
    <div style={{display:'flex',
      flexDirection:'column'
    }}>
      <div style={{display:'flex',
        gap:'15px'
      }}>
      <h3 style={{color:'#606569'}}>Chart Section</h3>
      <div>
        <lab style={{color:'#606569'}}>Select Symbol: </lab>
        <select value={symbol} onChange={(e) => setSymbol(e.target.value)} style={{backgroundColor:'#606569',borderRadius:'10px'}}>
          <option value="SPY">SPY</option>
          <option value="DIA">DIA</option>
          <option value="QQQ">QQQ</option>
        </select>
      </div>
      <div>
        <label style={{color:'#606569'}}>Select Time Range: </label>
        <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)} style={{backgroundColor:'#606569',borderRadius:'10px'}}>
          {timeRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="diagram-chart" style={{marginTop:'20px'}}>

      <LineChart width={600} height={300} data={chartData}>
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="orange" dot={false} />

      </LineChart>
      </div>
      
      
    </div>
  );
};

export default ChartSection;
