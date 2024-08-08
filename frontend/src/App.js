import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Fetching data...');
    fetch('http://localhost:8000/api/hello/')
      .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setMessage(data.message);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch data from the server: ' + error.message);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error ? (
          <p style={{ color: 'red' }}>{error}</p>
        ) : (
          <h1>{message}</h1>
        )}
      </header>
    </div>
  );
}

export default App;