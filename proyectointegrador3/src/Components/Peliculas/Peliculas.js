import React, { Component } from 'react'
import FavMoovieCard from "../FavMoovieCard/FavMoovieCard"
import PopMoovieCard from "../PopMoovieCard/PopMoovieCard"
//nos falta la apikey
let pelisFavoritas = "https://api.themoviedb.org/3/movie/top_rated?api_key="
let pelisEnCartel = "https://api.themoviedb.org/3/movie/popular?api_key="

class Peliculas extends Component {

    constructor(){
        super()
        this.state = {
            peliculasFav = [],
            peliculasEnCartel = []

        }
    }
    componentDidMount(){
        fetch(pelisFavoritas)
            .then(res => res.json())
                .then(data => this.setState({
                    peliculasFav: data.results,
                }))
            .catch(e => console.log(e))
        
        fetch(pelisEnCartel)
            .then(res => res.json())
                .then(data => this.setState({
                    peliculasEnCartel: data.results,
                }))
            .catch(e => console.log(e))


    }
    render() {
        return (
            <>

            <h2>Peliculas Favoritas</h2>
            <div className="card-container">
                {
                    this.state.peliculasFav === 0 ?
                    <p>Cargando...</p>
                    :
                    this.state.peliculasFav.map((PeliFav, idx)=>
                    <FavMoovieCard key={PeliFav.name + idx} peliculaFav={PeliFav} />
                    )

                }
            </div>
            <h2>Peliculas En Cartel</h2>
            <div className="card-container">
                 {
                    this.state.peliculasEnCartel === 0 ?
                    <p>Cargando...</p>
                    :
                    this.state.peliculasEnCartel.map((PeliPop, idx)=>
                    <PopMoovieCard key={PeliPop.name + idx} peliculaCartel={PeliPop} />
                    )

                }
            </div>
            </>
        )
    }
}

export default Peliculas
