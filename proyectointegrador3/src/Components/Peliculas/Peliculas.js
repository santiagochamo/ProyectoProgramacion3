import React, { Component } from 'react'
import SeriesCard from "../SeriesCard/SeriesCard"
import PopMoovieCard from "../PopMoovieCard/PopMoovieCard"
//nos falta la apikey

class Peliculas extends Component {

    constructor(props){
        super(props)
        this.state = {
            seriesPopulares: [],
            peliculasEnCartel: []

        }
    }
    
    render() {
        return (


            <div className="card-container">
                {
                    this.props.data.length === 0 ?
                    <p>Cargando...</p>
                    :
                    this.props.isMovie ?

                    this.props.data.map((PeliPop, idx)=>
                    <PopMoovieCard key={PeliPop.name + idx} peliculaCartel={PeliPop} />
                    )
                    
                    :

                    this.props.data.map((Serie, idx)=>
                    <SeriesCard key={Serie.name + idx} seriePopular={Serie} />
                    )

                }
            </div>
        )
    }
}

export default Peliculas
