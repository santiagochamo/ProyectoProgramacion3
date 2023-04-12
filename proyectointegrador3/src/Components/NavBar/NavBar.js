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
        path: '/Favoritos'
    }
]

function NavBar(){
    return(
        <nav>
        <ul className="main-nav">
            {
                opciones.map((elm, idx) => <li>
                    <Link to={elm.path}>
                        {elm.nombre}
                    </Link>
                </li>)
            }
        </ul>
        <ul className="user">
            <li className='logo'>
                <img src="src\Components\NavBar\img\download.jpg" alt="Logo"/>
            </li>
        </ul>
        </nav>
    )
}

export default NavBar