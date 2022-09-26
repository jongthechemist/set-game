import React from 'react';
import './App.css';
import Card from './components/Card';
import ShadingDefs from './components/shapes/ShadingDefs';
import { useDeck } from './hooks/useDeck';

function App() {
  const { deck } = useDeck(true);
  return (
    <div className="App">
      <main>
        <section className='grid grid-rows-3 h-screen grid-flow-col gap-8 p-8'>
          {
            deck.map((props, index) => <Card
              key={index}
              {...props} />)
          }
        </section>
      </main>
      <ShadingDefs />
    </div>
  );
}

export default App;
