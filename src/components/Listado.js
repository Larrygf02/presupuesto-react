import React from 'react';
import Gasto from './Gasto'

function Listado({gastos, eliminarGasto}) {
    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                gasto={gasto}
                eliminarGasto={eliminarGasto}
                key={gasto.id}></Gasto>
            ))}
        </div>
    )
}

export default Listado;