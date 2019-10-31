import React, { Fragment } from 'react'

function Pregunta() {
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form>
                <input type="number"
                        className="u-full-width"
                        placeholder="Agrega tu presupuesto"
                        //onChange={}
                        />

                <input type="submit" className="button-primary u-full-width" value="Definir presupuesto"/>
            </form>
        </Fragment>
    )
}

export default Pregunta