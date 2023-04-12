import React, {Component} from 'react'
import Peliculas from "../../Components/Peliculas/Peliculas"
import Buscador from '../../Components/Buscador/Buscador'


let tvPopular = "https://api.themoviedb.org/3/tv/popular?api_key=32a583d4ccec7f702faad954f990f1ba"
// let pelisEnCartel = "https://api.themoviedb.org/3/movie/popular?api_key=32a583d4ccec7f702faad954f990f1ba"



class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            seriesPopulares: [],
           // peliculasEnCartel: [],
            backup:[]
        }
    }
    componentDidMount(){
        fetch(tvPopular)
            .then(res => res.json())
                .then(data => this.setState({
                    seriesPopulares: data.results,
                    backup: data.results
                }))
            .catch(e => console.log(e))
        
        /*fetch(pelisEnCartel)
            .then(res => res.json())
                .then(data => this.setState({
                    peliculasEnCartel: data.results,
                    backup: data.results
                }))
            .catch(e => console.log(e)) */


    }

    actualizadorDeEstado(data){
        this.setState({
          seriesPopulares: data,
          /*peliculasEnCartel: data */
        })
      }

            /*<h2>Peliculas En Cartel</h2>
            <Peliculas data={this.state.peliculasEnCartel} isMovie={true}/> (linea 56) */

    render(){
        return (
            <>
               

                <Buscador actualizador={(data)=> this.actualizadorDeEstado(data)}
                          fuente={this.state.backup}   />
            <h2>Series Populares</h2>
            <Peliculas data={this.state.seriesPopulares} isMovie={false}/>
            
            </>
        )
    }
}

export default Home
