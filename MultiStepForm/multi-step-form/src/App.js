import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Identification from './Identification';
import Review from './Review';
import Confirmation from './Confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Identification/>} />
          <Route path="/review" element={<Review/>} />
          <Route path="/confirmation" element={<Confirmation/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
