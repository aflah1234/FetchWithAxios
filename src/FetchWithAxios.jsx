import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchWithAxios = () => {
  const [dataType, setDataType] = useState('characters');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/${dataType}`);
        setItems(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataType]);

  return (
    <div>
      <h1>API Fetcher</h1>
      <select onChange={(e) => setDataType(e.target.value)} value={dataType}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchWithAxios;
