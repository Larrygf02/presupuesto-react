import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

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

      //restar el presupuesto
      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante)
      //una vez que se agrega, lo ponemos como false
      guardarprimerGasto(false)
    }
  },[primerGasto, gasto, gastos, restante])

  const eliminarGasto = (id, cantidadGasto) => {
    console.log(gastos);
    let newGastos = [...gastos]
    newGastos = newGastos.filter(gasto => gasto.id !== id)
    guardarGastos(newGastos)
    console.log(cantidadGasto);
    const presupuestoRestante = restante + cantidadGasto
    guardarRestante(presupuestoRestante) 
    //newGastos = newGastos.filter(gasto => gasto.id !== id)
    //guardarGastos(newGastos)
    //guardarprimerGasto(true)
  }

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
                    gastos={gastos}
                    eliminarGasto={eliminarGasto}></Listado>
                    <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}></ControlPresupuesto>
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
