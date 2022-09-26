import { useEffect, useState } from 'react'
import './App.css'
import BotonClear from './components/BotonClear'
import Botons from './components/Botons'
import Pantalla from './components/Pantalla'
import { evaluate } from "mathjs"
import BotonDel from './components/BotonDel'
import Loader from "./components/Loader"


function App() {
  const [input, setInput] = useState("")

  const agregarInput = val => {
    setInput(input + val) 

    if(input===0){
      setInput(val)
    }else{
      setInput(input + val)
    }
  }

  const clearInput = () => setInput(0)

  const calcularResultado = () => {
    setInput(evaluate(input))
    
  }

  const del = () =>{
    setInput(input.slice (0, -1))
    
  }

  useEffect (() => {
    setTimeout(()=>{
      setIsLoading(false)
    }, 5000)
  }, [])

  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="App">
      {
        isLoading 
        ?
        <Loader/>
        :
      <div className='contenedor__calculadora'>
        <Pantalla input={input}/>
        <div className="contenedor__fila">
        <Botons agregarInput={agregarInput}>1</Botons>
        <Botons agregarInput={agregarInput}>2</Botons>
        <Botons agregarInput={agregarInput}>3</Botons>
        <Botons agregarInput={agregarInput}>+</Botons>
        </div>
        <div className="contenedor__fila">
        <Botons agregarInput={agregarInput}>4</Botons>
        <Botons agregarInput={agregarInput}>5</Botons>
        <Botons agregarInput={agregarInput}>6</Botons>
        <Botons agregarInput={agregarInput}>-</Botons>
        </div>
        <div className="contenedor__fila">
        <Botons agregarInput={agregarInput}>7</Botons>
        <Botons agregarInput={agregarInput}>8</Botons>
        <Botons agregarInput={agregarInput}>9</Botons>
        <Botons agregarInput={agregarInput}>*</Botons>
        </div>
        <div className="contenedor__fila">
        <Botons agregarInput={calcularResultado}>=</Botons>
        <Botons agregarInput={agregarInput}>0</Botons>
        <Botons agregarInput={agregarInput}>.</Botons>
        <Botons agregarInput={agregarInput}>/</Botons>
        </div>
        <div className="contenedor__fila">
        <BotonClear clearInput={clearInput}>Clear</BotonClear>
        <BotonDel del={del}>DEL</BotonDel>
        </div>
       </div>
        }
    </div>
      
  )
}

export default App
