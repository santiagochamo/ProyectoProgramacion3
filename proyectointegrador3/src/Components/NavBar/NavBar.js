import React from 'react'
import { Link } from 'react-router-dom'
import './style.css';


      const opciones = [
    {
        nombre: 'Home',
        path: '/'
    },
    
    {
        nombre: 'Ver todas Peliculas',
        path:'/VerTodasPeli'
    },
    {
      nombre: 'Ver todas series',
      path:'/VerTodasSeries'
    },
    {
        nombre:'Favoritos',
        path: '/favoritos'
    }
]

function NavBar(){
    return(
        <nav>
        <ul className="user">
            <li className='logo'>
                <img className='imagen' src={require("./img/download2.avif")} alt="Logo"/>
            </li>
        </ul>
        <ul className="main-nav">
            {
                opciones.map((elm, idx) => <li>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>)
            }
        </ul>
        
        </nav>
    )
}

export default NavBar