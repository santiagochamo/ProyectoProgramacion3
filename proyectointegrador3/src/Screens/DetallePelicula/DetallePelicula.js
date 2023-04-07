import React, { Component } from 'react';

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula:{},
            generos: [],
            
        }

    }

    componentDidMount() {

       //fetch
       console.log(this.state.pelicula)
       fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=32a583d4ccec7f702faad954f990f1ba`)
       .then(resp => resp.json())
       .then(data => this.setState({
         pelicula : data ,
         generos : data.genres ,
       }))
       .catch(e => console.log(e))
         
       
    }
    render(){
        return (
            <React.Fragment>
                    { 
                        this.state.pelicula.title === 0 ? 
                        <div>
                            <p>Cargando... </p>
                        </div> 
                        : 
                        <div>
                            <h2>{this.state.pelicula.title}</h2>
                            
                            <div className=''>

                                <div className=''>
                                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.pelicula.poster_path}`} alt={this.state.pelicula.title} />
                                </div>

                                <div className=''>
                                    <h3>Rating: {this.state.pelicula.popularity}</h3>
                                    <h3>Fecha de estreno: {this.state.pelicula.release_date}</h3>
                                    <h3>Duracion: {this.state.pelicula.runtime} Minutos</h3>
                                    <p>Sinopsis: {this.state.pelicula.overview} </p>
                                    <ul>
                                       {this.state.generos.map((genero , idx)  =>  
                                       <li propKey= {genero.name + idx} >
                                         {genero.name}
                                       </li>        
                                       )}
                                    </ul>
                                    
                                  
                                </div>
                            </div>
                        </div>
                    }
            </React.Fragment>
        )
    }

    }



export default DetallePelicula


