const fetchCountries = async (country = '', page = 1) => {
  try {
    const response = await fetch(`http://localhost:5173/countries?query=${country}&page=${page}&page_size=10`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

export default fetchCountries;
