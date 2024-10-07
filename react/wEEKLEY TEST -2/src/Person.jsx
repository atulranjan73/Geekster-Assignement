import React, { useState } from 'react';
import './person.css';

function Person() {
  const [isFormVisible, setFormVisible] = useState(false);
  const [isRetrieveVisible, setRetrieveVisible] = useState(false);
  const [people, setPeople] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    aadharNumber: '',
    mobileNumber: '',
    age: ''
  });
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleAddClick = () => {
    setFormVisible(true);
    setRetrieveVisible(false);
  };

  const handleRetrieveClick = () => {
    setRetrieveVisible(true);
    setFormVisible(false);
    setSearchResult(null); // Clear the previous search result
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveClick = () => {
    // Validate form inputs
    if (!formData.name || !formData.dob || !formData.aadharNumber || !formData.mobileNumber || !formData.age) {
      alert("Please fill in all fields before saving.");
      return;
    }

    setPeople([...people, formData]); // Save the new person to the list
    setFormData({
      name: '',
      dob: '',
      aadharNumber: '',
      mobileNumber: '',
      age: ''
    }); // Clear the form
    setFormVisible(false); // Hide form after saving
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  const handleSearchClick = () => {
    if (searchName.trim()) { // Ensure search input is not empty
      const result = people.find(
        person => person.name.toLowerCase() === searchName.trim().toLowerCase()
      );
      setSearchResult(result || null); // If no match, result will be null
    } else {
      setSearchResult(null); // Clear search result if input is empty
    }
  };

  return (
    <div className="container">
      <h2>Person Management</h2>

      <button className="add-btn" onClick={handleAddClick}>Add New Person</button>
      <button className="retrieve-btn" onClick={handleRetrieveClick}>Retrieve Information</button>

      {/* Table to display saved persons */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Aadhar Number</th>
              <th>Mobile Number</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.dob}</td>
                <td>{person.aadharNumber}</td>
                <td>{person.mobileNumber}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form to add a new person */}
      {isFormVisible && (
        <div className="form-container">
          <h3>Fill below form for New Entry</h3>
          <div className="form-row">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Aadhar Number:
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Mobile Number:
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button className="save-btn" onClick={handleSaveClick}>Save</button>
        </div>
      )}

      {/* Form to retrieve person information */}
      {isRetrieveVisible && (
        <div className="form-container">
          <h3>Retrieve Person Information</h3>
          <label>
            Search by Name:
            <input
              type="text"
              value={searchName}
              onChange={handleSearchChange}
              placeholder="Enter name"
            />
          </label>
          <button className="search-btn" onClick={handleSearchClick}>Search</button>

          {/* Display search result */}
          {searchResult ? (
            <div className="search-result">
              <h4>Person Details:</h4>
              <p>Name: {searchResult.name}</p>
              <p>Date of Birth: {searchResult.dob}</p>
              <p>Aadhar Number: {searchResult.aadharNumber}</p>
              <p>Mobile Number: {searchResult.mobileNumber}</p>
              <p>Age: {searchResult.age}</p>
            </div>
          ) : (
            searchName && <p>No person found with the name "{searchName}"</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Person;
