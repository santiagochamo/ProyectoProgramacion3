import React, { Component } from 'react'
import FavMoovieCard from "../FavMoovieCard/FavMoovieCard"
import PopMoovieCard from "../PopMoovieCard/PopMoovieCard"
//nos falta la apikey
let tvPopular = "https://api.themoviedb.org/3/tv/get-popular-tv-shows?api_key=32a583d4ccec7f702faad954f990f1ba"
let pelisEnCartel = "https://api.themoviedb.org/3/movie/popular?api_key=32a583d4ccec7f702faad954f990f1ba"

class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state = {
            seriesPopulares : [],
            peliculasEnCartel : []

        }
    }
    componentDidMount(){
        fetch(tvPopular)
            .then(res => res.json())
                .then(data => this.setState({
                    seriesPopulares: data.results,
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

            <h2>Series Populares</h2>
            <div className="card-container">
                {
                    this.state.seriesPopulares.length === 0 ?
                    <p>Cargando...</p>
                    :
                    this.state.seriesPopulares.map((Serie, idx)=>
                    <FavMoovieCard key={Serie.name + idx} seriePopular={Serie} />
                    )

                }
            </div>
            <h2>Peliculas En Cartel</h2>
            <div className="card-container">
                 {
                    this.state.peliculasEnCartel.length === 0 ?
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
