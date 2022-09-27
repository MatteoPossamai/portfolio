import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';

// created components
import HomePage from './components/homepage';
import SingleProject from './components/singleProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
    </Router>
  );
}

export default App;
