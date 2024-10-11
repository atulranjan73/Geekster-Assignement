import { useEffect, useState } from 'react';
import './App.css';
import './input.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [fvalue, setfvalue] = useState('');
  const [allData, setAllData] = useState([]);
  const key = '23ZwDmFYhvnHklZi0Y4jEHyqUlxOo3U5CrJC_iqmqak';
  const url = `https://api.unsplash.com/search/photos?page=10&query=${fvalue}&client_id=${key}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.results); 
        setAllData(data.results); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (fvalue) {
      fetchData();
    }
  }, [fvalue, url]);

  const getFinalValue = () => {
    setfvalue(inputValue);
  };

  return (
    <>
      <h1>Image Search</h1>
      {/* <input onChange={(e) => setInputValue(e.target.value)} type="text" /> */}
      <div className="input-container">
      <input 
        type="text" 
        // value={input} 
        onChange={(e) => setInputValue(e.target.value)} 
        className="animated-input" 
        placeholder="Type something..." 
      />
       <button onClick={getFinalValue}>Search</button>
    </div>
     
      <div className="image-grid" style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexWrap:"wrap",
        gap:"4rem"
      }}>
        {allData.length > 0 ? (
          allData.map((data, index) => (
            <img style={{
              width:"400px",
              height:"500px",
              borderRadius:"15px",
              border:"10px solid white"
            }} key={index} src={data.urls.full} alt={data.alt_description || 'Image'} />
          ))
        ) : (
          <p>No images found.</p>
        )}
      </div>
    </>
  );
}

export default App;