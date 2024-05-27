import axios from 'axios';

const API_KEY = 'pk_5df285ba16974e5bbe50e1cbb66b479f';
const BASE_URL = 'https://cloud.iexapis.com/v1';

export async function getMarketData() {
  try {
    const response = await axios.get(`${BASE_URL}/stock/market/batch`, {
      params: {
        symbols: 'AAPL', // Example symbols, you can adjust as needed
        types: 'quote,chart,news',
        token: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching market data:', error);
   
  }
};

export async function getSectorPerformance() {
  try {
    const response = await axios.get(`${BASE_URL}/stock/market/sector-performance`, {
      params: {
        token: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching sector performance:', error);
    return null;
  }
};

export async function getNews() {
  try {
    const response = await axios.get(`${BASE_URL}/news`, {
      params: {
        token: API_KEY,
        items: 50, // Fetch up to 50 news articles
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
};


export const fetchMarketIndices = async () => {
  try {
    const symbols = ['DIA', 'SPY', 'QQQ', 'CL','GC','SI',]; // Market indices and commodities symbols
    const types = 'quote'; // Data type

    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${symbols.join(',')}&types=${types}&token=${API_KEY}`);

    const marketIndicesData = Object.values(response.data).map((indexData) => {
      const quoteData = indexData.quote;
      return {
        symbol: quoteData.symbol,
        currentValue: quoteData.latestPrice,
        dailyChange: quoteData.change,
        percentageChange: quoteData.changePercent,
      };
    });

    return marketIndicesData;
  } catch (error) {
    console.error('Error fetching market indices data:', error);
    throw error;
  }
};



export const fetchChartData = async (symbol, timeRange) => {
  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${symbol}/chart/${timeRange}?token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching chart data:', error);
    throw error;
  }
};

