import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages';
import { FuelRequestPage } from './pages/fuelRequest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />}/>
        <Route path='/request-fuel' element={<FuelRequestPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
