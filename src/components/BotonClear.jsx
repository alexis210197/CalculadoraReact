import React from 'react'
import "../styles/clear.css"
const BotonClear = ({children, clearInput}) => {
  return (
    <div className='boton__clear' onClick={clearInput}>
        {children}
    </div>
  )
}

export default BotonClear