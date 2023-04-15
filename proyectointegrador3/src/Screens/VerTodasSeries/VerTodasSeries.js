import React, { Component } from 'react'
import Buscador from "../../Components/Buscador/Buscador"
import Peliculas from "../../Components/Peliculas/Peliculas"

let tvPopular = "https://api.themoviedb.org/3/tv/popular?api_key=32a583d4ccec7f702faad954f990f1ba"

class VerTodasSeries extends Component {

  constructor(props){
    super(props)
    this.state = {
      series:[],
      backup: []
    }
  }

  actualizadorDeEstado(data){
    this.setState({
      series: data
    })
  }

  componentDidMount(){
    
    fetch(tvPopular)
        .then(res => res.json())
            .then(data => this.setState({
                series: data.results,
                backup: data.results,
                cargarMas:''

            }))
        .catch(e => console.log(e)) 

    
}

masSeries() {
  let cargarMasSeries = `https://api.themoviedb.org/3/tv/popular?api_key=32a583d4ccec7f702faad954f990f1ba&page=${this.state.cargarMas + 1}`
  fetch(cargarMasSeries)
    .then(res => res.json())
    .then(
      data => this.setState({
        series: this.state.series.concat(data.results),
        backup: this.state.series.concat(data.results),
        cargarMas: data.page + 1,
      }))
    .catch(err => console.log(err))
}

render() {
  return (
    
    <div>
    <Buscador 
      actualizador={(data) => this.actualizadorDeEstado(data)}
      contenido = {this.state.backup} 
      />
      <Peliculas data={this.state.series}/>
      <button onClick={() => this.masSeries()}>
          Cargar Mas Series
        </button>
    
    </div>
  )
}
}


export default VerTodasSeries
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