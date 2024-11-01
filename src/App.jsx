import React, { useState, useEffect } from 'react';
import GitCheatsheet from './GitCheatSheet.jsx';

const App = () => {
  const [selectedCommands, setSelectedCommands] = useState([]);

  useEffect(() => {
    const fetchSelectedCommands = async () => {
      try {
        const response = await fetch('/api/getSelectedCommands');
        const data = await response.json();
        setSelectedCommands(data);
      } catch (error) {
        console.error('Error fetching selected commands:', error);
      }
    };

    fetchSelectedCommands();
  }, []);

  const handleButtonClick = async (commandName) => {
    try {
      await fetch('/api/selectCommand', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commandName }),
      });
      setSelectedCommands((prevSelected) => [...prevSelected, commandName]);
    } catch (error) {
      console.error('Error selecting command:', error);
    }
  };

  const handleClearAll = async () => {
    try {
      await fetch('/api/clearCommands', {
        method: 'POST',
      });
      setSelectedCommands([]);
    } catch (error) {
      console.error('Error clearing commands:', error);
    }
  };

  return (
    <div>
      <GitCheatsheet onButtonClick={handleButtonClick} selectedCommands={selectedCommands} />
      <button onClick={handleClearAll}>Clear All Answers</button>
    </div>
  );
};

export default App;
