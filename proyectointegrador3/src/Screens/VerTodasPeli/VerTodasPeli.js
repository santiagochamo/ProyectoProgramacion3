import React, { Component } from 'react'
import BuscadorPeli from "../../Components/BuscadorPeli/BuscadorPeli"
import Peliculas from "../../Components/Peliculas/Peliculas"

let pelisEnCartel = "https://api.themoviedb.org/3/movie/popular?api_key=32a583d4ccec7f702faad954f990f1ba"

class VerTodasPeli extends Component {

  constructor(props){
    super(props)
    this.state = {
      peliculas:[],
      backup: []
    }
  }

  actualizadorDeEstado(data){
    this.setState({
      peliculas: data
    })
  }

  componentDidMount(){
    
    fetch(pelisEnCartel)
        .then(resp => resp.json())
            .then(data => this.setState({
                peliculas: data.results,
                backup: data.results

            }))
        .catch(e => console.log(e)) 

    
}

  render() {
    return (
      <div>
      
    <BuscadorPeli 
      actualizador={(data) => this.actualizadorDeEstado(data)}
      contenido = {this.state.backup} 
      />
      <Peliculas data={this.state.peliculas}/>
      
    
    </div>
      
      
    )
  }
}

export default VerTodasPeli

/*componentDidMount(){
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

        
    }*/