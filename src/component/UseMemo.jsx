import React, { useState, useMemo } from 'react';

function SquareCalculator() {
  const [number, setNumber] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const squaredNumber = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  const themeStyles = {
    backgroundColor: darkMode ? 'black' : 'white',
    color: darkMode ? 'white' : 'black',
  };

  return (
    <div style={themeStyles}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h2>Square: {squaredNumber}</h2>
      <button onClick={() => setDarkMode((prev) => !prev)}>
        Toggle Theme
      </button>
    </div>
  );
}

export default SquareCalculator;
