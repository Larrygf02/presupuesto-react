import React, { useState } from 'react';
import Pregunta from './components/Pregunta'

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta></Pregunta>
        </div>
      </header>
    </div>
  );
}

export default App;
