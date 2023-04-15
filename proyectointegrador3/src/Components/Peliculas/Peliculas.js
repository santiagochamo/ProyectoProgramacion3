import React, { Component } from 'react'
import SeriesCard from "../SeriesCard/SeriesCard"
import PopMoovieCard from "../PopMoovieCard/PopMoovieCard"
import Loader from '../Loader/Loader';
import './style.css';
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
                    <Loader />
                    :
                    this.props.isMovie ?

                    this.props.data.map((PeliPop, idx)=>
                    <PopMoovieCard key={PeliPop.title + idx} peliculaCartel={PeliPop} />
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
