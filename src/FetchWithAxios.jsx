import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../axios/src/fetchAxios.css'

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
    <div className='box'>
      <div className="content">

      <h1 className='heading'>API Fetcher</h1>
      <select onChange={(e) => setDataType(e.target.value)} value={dataType} className='select'>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>

      <ul className='ulist'>
        {items.map((item) => (
          <li key={item.id}>
            Name: {item.name}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default FetchWithAxios;
