import React, { useEffect, useState } from 'react';
import { getSectorPerformance } from './services/api';
import './index.css'; // Ensure you have the CSS imported

function SectorPerformance() {
  const [sectorData, setSectorData] = useState([]);

  useEffect(() => {
    async function fetchSectorData() {
      try {
        const sectorPerformanceResponse = await getSectorPerformance();
        setSectorData(sectorPerformanceResponse);
      } catch (error) {
        console.error('Error fetching sector performance:', error);
      }
    }

    fetchSectorData();
  }, []);

  return (
    <>
      <div className="outer-surface">
        <div className="surface-heading">
        <h2>Sector Performnace</h2>
        <h2>% price change</h2>
        </div>
        
      <div className="sector-performance">
        <div className="sector-columns-1">
          {sectorData.slice(0, 6).map((sector, index) => (
            <div key={index} className="sector-item-1">
              <p>{sector.name}:</p>
              <span style={{ color: parseFloat(sector.performance) >= 0 ? 'green' : 'red' }}>
                {parseFloat(sector.performance) >= 0 ? '+' : '-'}
                {Math.abs(parseFloat(sector.performance))}%
              </span>
            </div>
          ))}
        </div>

        <div className="sector-columns-2">
          {sectorData.slice(5, 11).map((sector, index) => (
            <div key={index} className="sector-item-2">
              <p>{sector.name}:</p>
              <span style={{ color: parseFloat(sector.performance) >= 0 ? 'green' : 'red' }}>
                {parseFloat(sector.performance) >= 0 ? '+' : '-'}
                {Math.abs(parseFloat(sector.performance))}%
              </span>
            </div>
          ))}
        </div>
      </div>
      </div>
      
    </>
  );
}

export default SectorPerformance;
