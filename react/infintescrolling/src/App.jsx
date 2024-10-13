import { useEffect, useState } from 'react';
import './App.css';
import './input.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fvalue, setfvalue] = useState('');
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1); // Track page number
  const [loading, setLoading] = useState(false); // Loading state
  const key = '23ZwDmFYhvnHklZi0Y4jEHyqUlxOo3U5CrJC_iqmqak';

  // Fetch data function
  const fetchData = async (pageNum) => {
    setLoading(true);
    const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${fvalue}&client_id=${key}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setAllData((prevData) => [...prevData, ...data.results]); // Append new data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Fetch new data when `fvalue` or `page` changes
  useEffect(() => {
    if (fvalue) {
      fetchData(page);
    }
  }, [fvalue, page]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        // When scrolled to bottom, load more images
        setPage((prevPage) => prevPage + 1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Get input value on button click
  const getFinalValue = () => {
    setAllData([]); // Clear previous results
    setPage(1); // Reset to page 1 when new search is made
    setfvalue(inputValue);
  };

  return (
    <>
      <h1>Image Search with Infinite Scroll</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          className="animated-input"
          placeholder="Type something..."
        />
        <button onClick={getFinalValue}>Search</button>
      </div>

      <div
        className="image-grid"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '4rem',
        }}
      >
        {allData.length > 0 ? (
          allData.map((data, index) => (
            <img
              style={{
                width: '400px',
                height: '500px',
                borderRadius: '15px',
                border: '10px solid white',
              }}
              key={index}
              src={data.urls.full}
              alt={data.alt_description || 'Image'}
            />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>

      {loading && <p>Loading more images...</p>}
    </>
  );
}

export default App;
