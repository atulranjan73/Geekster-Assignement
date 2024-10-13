import { useEffect, useState, useCallback } from 'react';
import './App.css';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [fvalue, setfvalue] = useState('');
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1); // Track page number
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const key = '23ZwDmFYhvnHklZi0Y4jEHyqUlxOo3U5CrJC_iqmqak';

  // Fetch data function
  const fetchData = useCallback(async (pageNum) => {
    setLoading(true);
    setError(null); // Reset error state

    const url = `https://api.unsplash.com/search/photos?page=${pageNum}&query=${fvalue}&client_id=${key}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setAllData((prevData) => [...prevData, ...data.results]); // Append new data
      } else {
        setError('No images found.');
      }
    } catch (error) {
      setError('Error fetching data. Please try again.');
    }
    setLoading(false);
  }, [fvalue]);

  // Fetch new data when `fvalue` or `page` changes
  useEffect(() => {
    if (fvalue) {
      fetchData(page);
    }
  }, [fvalue, page, fetchData]);

  // Scroll event listener with debounce
  useEffect(() => {
    const debounceScroll = (func, wait = 100) => {
      let timeout;
      return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    };

    const handleScroll = debounceScroll(() => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    }, 200);

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
        {error ? (
          <p>{error}</p>
        ) : allData.length > 0 ? (
          allData.map((data, index) => (
            <img
              style={{
                width: '400px',
                height: '500px',
                borderRadius: '15px',
                border: '10px solid white',
                objectFit: 'cover',
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
