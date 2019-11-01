import React, { Fragment, useState } from 'react'
import Error from './Error'

function Pregunta(props) {
    const { guardarPresupuesto, guardarPreguntaPresupuesto } = props
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();
        //validar
        if (cantidad <= 0 || isNaN(cantidad)) {
            guardarError(true);
            return;
        }

        // si se pasa la validacion pasar el presupuesto
        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarPreguntaPresupuesto(false)
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"></Error>: null}
            <form
                onSubmit={agregarPresupuesto}>
                <input type="number"
                        className="u-full-width"
                        placeholder="Agrega tu presupuesto"
                        onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                        //onChange={}
                        />

                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
            </form>
        </Fragment>
    )
}

export default Pregunta