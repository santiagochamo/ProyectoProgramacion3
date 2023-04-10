import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Buscador from "../../Components/Buscador/Buscador"

class NavBar extends Component {
  render() {
    return (
      <>
      <header className="">
        <img src="./proyectoProgramacion3/ProyectoProgramacion3/proyectointegrador3/src/Components/NavBar/img/download.jpg" />
        <Buscador />
        <h3><a href="./">Home</a></h3>
        <Link to={`../../../../Screens/Favoritos/Favoritos`}>
                      <p>Favoritos</p>
                    </Link>
        <h3><a href="./">Ver Todas</a></h3>
      </header>
      </>
    )
  }
}

export default NavBar