import React, { Component } from 'react'
import './style.css'

class Loader extends Component {
  render() {
    return (
      
      <div className='loader'>
        
        <img className='loader-img' src={require('./img/loader.gif')} alt='loader'/>
        <p>Cargando...</p>
        
      </div>
    )
  }
}

export default Loader