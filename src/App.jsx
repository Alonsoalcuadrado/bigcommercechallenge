import { useState, useEffect } from 'react';
import fetchCountries from './services/Countries';
import CountriesList from './components/countries/CountriesList';
import Navbar from './components/navbar/Navbar';

import 'material-icons/iconfont/material-icons.css';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [submitSearch, setSubmitSearch] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getCountries = async () => {
      const countries = await fetchCountries(submitSearch, page, 10);
      if (countries) {
        setCountries(countries.results);
        setTotal(countries.total);
      }
    };

    getCountries();
  }, [submitSearch, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmitSearch(search);
  };

  return (
    <div className="container">
      <form className="form-container" onSubmit={handleSearchSubmit}>
        <input type="text" value={search} onChange={handleSearchChange} placeholder="Buscar país" />
        <button type="submit">Buscar</button>
      </form>
      {countries ? (
        <ul className="list-container">
          {countries?.map((country) => (
            <CountriesList key={country.code} country={country} />
          ))}
        </ul>
      ) : (
        <h2>No results</h2>
      )}
      <Navbar setPage={setPage} total={total} page={page} />
    </div>
  );
}

export default App;
