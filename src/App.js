import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ 
      background: 'gray-800', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div className="container mx-auto p-4">
        <Navbar />
        <SearchBar search={search} onSearchChange={handleSearchChange} />
        <UserList data={filteredData} />
      </div>
    </div>
  );
};

export default App;
