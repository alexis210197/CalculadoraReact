import React from 'react'
import "../styles/del.css"
const BotonBack = ({del, children}) => {
  return (
    <div className='boton__del' onClick={del}>
    {children}
</div>
  )
}

export default BotonBack