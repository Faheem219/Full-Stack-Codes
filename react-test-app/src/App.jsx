// src/App.jsx

import React, { useEffect, useState } from 'react';
import SplashScreen from './SplashScreen';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {loading ? <SplashScreen /> : <div>Your main app content here</div>}
    </div>
  );
};

export default App;