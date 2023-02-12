import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IndexPage } from './pages';
import { FuelRequestPage } from './pages/fuelRequest';
import { SupplyTankPage } from './pages/supplyTank';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />}/>
        <Route path='/request-fuel' element={<FuelRequestPage />}/>
        <Route path='/supply-tank' element={<SupplyTankPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
