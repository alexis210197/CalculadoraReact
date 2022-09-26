import React from 'react'
import "../styles/boton.css"
const Botons = ({children, agregarInput}) => {

    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "=");
    }
  return (
    <div className={`boton-contenedor ${esOperador(children) ? "operador" : null}`.trim()} 
    onClick = {()=> agregarInput(children)}>
        {children}
        
    </div>
  )
}

export default Botons