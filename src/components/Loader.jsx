import React from 'react'
import "../styles/loader.css"
import loader from "../assets/gif.gif"
const Loading = () => {
  return (
    <div className='loading'>
        <img className="gif" src={loader} alt="" />
    </div>
  )
}

export default Loading