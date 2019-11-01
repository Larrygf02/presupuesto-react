import React, { useState } from 'react'
import Error from './Error'

function Formulario(props) {
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if (cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
            guardarError(true);
            return;
        }
    }

    return (
        <form
            onSubmit={agregarGasto}>
            <h2>Agrega tus Gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios"></Error> : null}
            <div className="campo">
                <label htmlFor="">Nombre Gasto</label>
                <input type="text"
                        className="u-full-width"
                        placeholder="Ej . Transporte"
                        onChange={e => guardarNombreGasto(e.target.value)}/>
            </div>
            <div className="campo">
                <label htmlFor="">Cantidad Gasto</label>
                <input type="number"
                        className="u-full-width"
                        placeholder="Ej . 300"
                        onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar Gasto"/>
        </form>
    )
}

export default Formulario;