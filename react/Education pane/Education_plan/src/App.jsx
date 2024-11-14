import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem("plans"));
    if (savedPlans) {
      setResults(savedPlans);
    }
  }, []);

  useEffect(() => {
    if (results.length > 0) {
      localStorage.setItem("plans", JSON.stringify(results));
    }
  }, [results]);

  const handleSubmit = () => {
    if (subject && hours) {
      const newPlan = {
        subject,
        hours: parseInt(hours),
        incrementedHours: parseInt(hours),
      };
      const updatedResults = [...results, newPlan];

      setResults(updatedResults);

      // Clear the input fields
      setSubject("");
      setHours("");
    }
  };

  const handleIncrement = (index) => {
    const updatedResults = results.map((plan, idx) => {
      if (idx === index) {
        return { ...plan, incrementedHours: plan.incrementedHours + 1 };
      }
      return plan;
    });
    setResults(updatedResults);
  };

  const handleDecrement = (index) => {
    const updatedResults = results.map((plan, idx) => {
      if (idx === index && plan.incrementedHours > 0) {
        return { ...plan, incrementedHours: plan.incrementedHours - 1 };
      }
      return plan;
    });
    setResults(updatedResults);
  };

  const handleClearPlans = () => {
    setResults([]);
    localStorage.removeItem("plans");
  };

  return (
    <div className="container">
      <h1>Geekster Education Planner</h1>

      <form>
        <div className="input-group">
          <input
            type="text"
            value={subject}
            placeholder="Enter Subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Hours"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="button" className="add-btn">
          Add Plan
        </button>
      </form>

      <div className="result">
        <h2>Plan Summary</h2>
        <ul>
          {results.map((plan, index) => (
            <li key={index}>
              <span>{plan.subject}</span>
              <span>{plan.incrementedHours}H</span>
              <button
                onClick={() => handleIncrement(index)}
                className="resultbtn"
              >
                +
              </button>
              <button
                onClick={() => handleDecrement(index)}
                className="resultbtn"
              >
                -
              </button>
              <button
                onClick={handleClearPlans}
                type="button"
                className="clear-btn"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to clear the stored plans */}
    </div>
  );
}

export default App;
