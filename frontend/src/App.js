import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Workouts from './components/Workouts';
import Weight from './components/Weight';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Navigate to="/workouts" />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/weight" element={<Weight />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
