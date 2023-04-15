import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css';

class SeriesCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            descripcion: 'ocultar',
            textoDescripcion: 'Ver descripcion',
        };
    };

    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
    
        if(storageAArray !== null){
          let estaEnElArray = storageAArray.includes(this.props.seriePopular.id)
          if(estaEnElArray){
            this.setState({
              esFavorito: true
            })
          }
        }
      }
    
      anhadirFav(id){
        let storage = localStorage.getItem('favoritos')
    
        if(storage === null){
          let idEnArray = [id]
          let arrayAString = JSON.stringify(idEnArray)
          localStorage.setItem('favoritos', arrayAString)
    
        } else {
          let deStringAArray = JSON.parse(storage) 
          deStringAArray.push(id)
          let arrayAString = JSON.stringify(deStringAArray)
          localStorage.setItem('favoritos', arrayAString)
        }
    
        this.setState({
          esFavorito: true
        })
      }
      
    
      sacarFav(id){
        let storage = localStorage.getItem('favoritos')
        let storageAArray = JSON.parse(storage)
        let filtro = storageAArray.filter((elm)=> elm !== id)
        let filtroAString = JSON.stringify(filtro)
        localStorage.setItem('favoritos', filtroAString)
    
        this.setState({
          esFavorito: false
        })
    
    
      }

    mostrarDescripcionSerie() {
        if (this.state.descripcion === 'ocultar') {
            this.setState({
                descripcion: 'mostrar', textoDescripcion: 'Ocultar descripcion'
            })
        } else {
            this.setState({
                descripcion: 'ocultar', textoDescripcion: 'Ver descripcion'
            })
        }
    }

    render() {
        return (
            <article className='card'>
              
                    <Link to={`/DetalleSerie/DetalleSerie/id/${this.props.seriePopular.id}`}>
                        <img className='card-img' src={`https://image.tmdb.org/t/p/w342/${this.props.seriePopular.poster_path}`} alt="Cartel de serie" />
                    </Link>
               
                <h2 className='card-titulo'>{this.props.seriePopular.name}</h2>
                <div className='descripcion'>
                    <p className='' onClick={() => this.mostrarDescripcionSerie()}> {this.state.textoDescripcion} </p>
                    <p className={this.state.descripcion}>{this.props.seriePopular.overview}</p>
                    
                </div>
                <div className='detalle-button'>
                    <Link to={`/DetalleSerie/DetalleSerie/id/${this.props.seriePopular.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>
            {
              this.state.esFavorito ?
               <button onClick={()=> this.sacarFav(this.props.seriePopular.id)}> Sacar de Favs</button>
              :
                <button onClick={()=> this.anhadirFav(this.props.seriePopular.id)}>Añadir a Favs</button>
            }

            </article>
        )
    }
}
export default   SeriesCard
