import React, { useEffect, useState } from 'react';
import { getMarketData, getNews } from './services/api';
import SectorPerformance from './sectorPerfomance'; // Import the SectorPerformance component
import './index.css';

function MarketSummary() {
  const [marketData, setMarketData] = useState({});
  const [news, setNews] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const marketDataResponse = await getMarketData();
        setMarketData(marketDataResponse);

        const newsResponse = await getNews();
        // Filter news to only include one article per company
        const uniqueNews = {};
        newsResponse.forEach(article => {
          if (!uniqueNews[article.source]) {
            uniqueNews[article.source] = article;
          }
        });
        setNews(Object.values(uniqueNews)); // Only the first news article for each company
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function inside useEffect
  }, []);

  return (
    <div className="market-summary-container">
      <div className="market-performance">
        <div>
          {marketData ? (
            Object.keys(marketData).slice(0, 5).map((symbol, index) => (
              <div key={index} className="market-item">
                <p style={{ color: marketData[symbol].quote.change >= 0 ? 'green' : 'red' }} className='nature'>
                  {marketData[symbol].quote.change >= 0 ? 'The market is bullish' : 'The market is bearish'}
                </p>
                {marketData[symbol].news && marketData[symbol].news.length > 0 && (
                  <div key={marketData[symbol].news[0].url} className="news-item">
                    {marketData[symbol].news[0].image && (
                      <a href={marketData[symbol].news[0].url} target="_blank" rel="noopener noreferrer">
                        <img src={marketData[symbol].news[0].image} alt="News" className="news-image" />
                      </a>
                    )}
                    <p className='summary'>{marketData[symbol].news[0].headline}</p>
                  </div>
                )}
                
              </div>
            ))
          ) : (
            <p>Loading market summary...</p>
          )}
        </div>
      </div>
      <div className="sector-performance">
        <SectorPerformance />
      </div>
    </div>
  );
}

export default MarketSummary;
