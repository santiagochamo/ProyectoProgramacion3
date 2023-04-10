import React from 'react'
import Peliculas from "../../Components/Peliculas/Peliculas"
import NavBar from "../../Components/NavBar/NavBar"

function Home() {
    return (
        <>
            <NavBar />
        <h1>
            <Peliculas />
        </h1>
        </>
    )
}

export default Home
