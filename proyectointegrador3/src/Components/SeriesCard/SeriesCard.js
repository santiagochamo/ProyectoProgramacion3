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
            <article className=''>
              
                    <Link to={`/DetalleSerie/DetalleSerie/id/${this.props.seriePopular.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.props.seriePopular.poster_path}`} alt="Cartel de serie" />
                    </Link>
               
                <h2 className=''>{this.props.seriePopular.name}</h2>
                <div>
                    <p onClick={() => this.mostrarDescripcionSerie()}> {this.state.textoDescripcion} </p>
                    <p className={this.state.descripcion}>{this.props.seriePopular.overview}</p>
                    
                </div>
                <div className=''>
                    <Link to={`/DetalleSerie/DetalleSerie/id/${this.props.seriePopular.id}`}>
                        <button>Ir a detalle</button>
                    </Link>
                </div>

            </article>
        )
    }
}
export default   SeriesCard