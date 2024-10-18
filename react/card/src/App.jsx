import { useState } from 'react';
import { employeesData } from './employeesData';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(employeesData); 
  const [team, setTeam] = useState([]); 
  const [disabled, setDisabled] = useState({});

  const addToTeam = (employee) => {
    setTeam((prevTeam) => [...prevTeam, employee]); // Add employee to team
    setDisabled((prevDisabled) => ({ ...prevDisabled, [employee.name]: true })); // Disable employee in the list
  };

  const removeFromTeam = (employee) => {
    setTeam((prevTeam) => prevTeam.filter((mem) => mem.name !== employee.name)); // Remove employee from team
    setDisabled((prevDisabled) => ({ ...prevDisabled, [employee.name]: false })); // Re-enable employee in the list
  };

  // Calculate average age of employees
  const calculateAverageAge = () => {
    const totalAge = team.reduce((sum, emp) => sum + emp.age, 0);
    return team.length > 0 ? (totalAge / team.length).toFixed(1) : 0;
  };

  return (
    <div className="container">
      <div className="left">
        <h1>Employees</h1>
        {employees.map((employee, index) => (
          <div
            className={`box ${disabled[employee.name] ? 'disabled' : ''}`}
            key={index}
          >
            <span>{employee.name}</span>
            <span>{employee.age}</span>
            {!disabled[employee.name] && (
              <button onClick={() => addToTeam(employee)}>Add</button>
            )}
          </div>
        ))}
      </div>
      
      <div className="right">
        <h1>Team</h1>
        <div className="top">
          {team.map((employee, index) => (
            <div className="box" key={index}>
              <span>{employee.name}</span>
              <span>{employee.age}</span>
              <button onClick={() => removeFromTeam(employee)}>Remove</button>
            </div>
          ))}
        </div>
        
        <div className="down">
          <hr />
          <div className="average">
            <h2>Average Age</h2>
            <h2>{calculateAverageAge()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
