import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [notification, setNotification] = useState(false);

  const handleAddItem = () => {
    if (itemName.trim()) {
      setItems([...items, itemName]);
      setItemName('');
      showNotification();
    }
  };

  const handleDeleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const showNotification = () => {
    setNotification(true);
    setTimeout(() => {
      setNotification(false);
    }, 2000);
  };

  return (
    <div className="app-container">
      {notification && (
        <div className="custom-notification">
          <div className="notification-content">
            <div className="icon-text">
              <span className="check-icon">✔</span>
              <span>Item Added To The List</span>
            </div>
            <button className="close-btn" onClick={() => setNotification(false)}>×</button>
          </div>
          <div className="progress-bar"></div>
        </div>
      )}
      <div className="grocery-container">
        <h1>Grocery Bud</h1>
        <div className="input-container">
          <input 
            type="text" 
            value={itemName} 
            onChange={(e) => setItemName(e.target.value)} 
            placeholder="Add item" 
          />
          <button onClick={handleAddItem}>Add Item</button>
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <input type="checkbox" />
              <span>{item}</span>
              <button className="delete-btn" onClick={() => handleDeleteItem(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
