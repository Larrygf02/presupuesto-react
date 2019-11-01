import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  // state
  const [ presupuesto, guardarPresupuesto] = useState(0)
  const [ restante, guardarRestante ] = useState(0)
  const [ preguntaPresupuesto, guardarPreguntaPresupuesto ] = useState(true)
  const [ primerGasto, guardarprimerGasto ] = useState(false)
  const [ gasto, guardarGasto ] = useState({})
  const [ gastos, guardarGastos ] = useState([]) 

  useEffect(() => {
    if (primerGasto) {
      const listadoGastos = [...gastos, gasto];
      guardarGastos(listadoGastos)
      //una vez que se agrega, lo ponemos como false
      guardarprimerGasto(false)
    }
  },[primerGasto])

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {(preguntaPresupuesto) ? 
          <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarPreguntaPresupuesto={guardarPreguntaPresupuesto}
            guardarRestante={guardarRestante}></Pregunta>
            : (
              <div className="row">
                <div className="one-half column">
                  <Formulario
                          guardarGasto={guardarGasto}
                          guardarprimerGasto={guardarprimerGasto}></Formulario>
                </div>

                <div className="one-half column">
                  <Listado 
                    gastos={gastos}></Listado>
                </div>
              </div>
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
