import React from 'react';
import './App.css';
import Diamond from './components/shapes/Diamond';
import Ellipse from './components/shapes/Ellipse';
import ShadingDefs from './components/shapes/ShadingDefs';
import Squiggle from './components/shapes/Squiggle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ShadingDefs/>
        <Diamond color='red' shading='empty'/>
        <Ellipse color='purple' shading='hashed'/>
        <Squiggle color='green' shading='solid'/>
      </header>
    </div>
  );
}

export default App;
