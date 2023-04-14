import React, {Component} from 'react'
import Peliculas from "../../Components/Peliculas/Peliculas"


let tvPopular = "https://api.themoviedb.org/3/tv/popular?api_key=32a583d4ccec7f702faad954f990f1ba"
let pelisEnCartel = "https://api.themoviedb.org/3/movie/popular?api_key=32a583d4ccec7f702faad954f990f1ba"
let search = "https://api.themoviedb.org/3/search/multi?api_key=32a583d4ccec7f702faad954f990f1ba&query="


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            seriesPopulares: [],
            peliculasEnCartel: [],
            resultadosBusqueda: [],
            datoABuscar: ""
        }
    }
    componentDidMount(){
        fetch(tvPopular)
            .then(res => res.json())
                .then(data => this.setState({
                    seriesPopulares: data.results
                    
                }))
            .catch(e => console.log(e))
        
        fetch(pelisEnCartel)
            .then(res => res.json())
                .then(data => this.setState({
                    peliculasEnCartel: data.results
    
                }))
            .catch(e => console.log(e)) 

        
    }

    evitarSubmit(event){
        event.preventDefault()
      }

    actualizadorDeEstado(data){
        this.setState({
          seriesPopulares: data,
          pelisEnCartel: data
        })
      }

      buscarEnLaApi(valorInput){
          fetch(search+valorInput)
          .then(resp => resp.json())
          .then(data => this.setState({
              resultadosBusqueda:data.results
          }))
          .catch(err => console.log(err))
          
      }
      
      guardarValor(event){
        this.setState({
          datoABuscar: event.target.value
        }
    
        )
    }
    metodoQueEnvia(){
        console.log("enviamos la info.")
      }
//Linea 65 <Buscador metodoQueBusca={ valorInput => this.buscarEnLaApi(valorInput)} />
//poner un form de busqueda en el "espacio" de abajo          

    render(){
        return (
            <>
               <form onSubmit={(event)=> this.evitarSubmit(event)}>
        <div>
            <label>Busca la serie/pelicula que desees</label>
        </div>
        <div>
            <input onChange={(event)=> this.guardarValor(event)} value={this.state.datoABuscar}/>
        </div>
        <button onClick={() => this.buscarEnLaApi()}>Enviar consulta</button> 
    </form>
                
                
                {
                    this.state.resultadosBusqueda.length > 0 ?
                    <>
                        <h2>Resultados de busqueda</h2>
                        <Peliculas data={this.state.resultadosBusqueda} isMovie={true}/>
                        
                    </>
                    
                    :
                    <>
                        <h2>Series Populares</h2>
                        <Peliculas data={this.state.seriesPopulares} isMovie={false}/>
                        <h2>Peliculas En Cartel</h2>
                        <Peliculas data={this.state.peliculasEnCartel} isMovie={true}/>
                    </>
                }
            </>
        )
    }
}

export default Home
