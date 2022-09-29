import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import ShadingDefs from './components/shapes/ShadingDefs';

function App() {
  return (
    <div className="App">
      <main>
        <Outlet/>
      </main>
      <ShadingDefs />
    </div>
  );
}

export default App;
