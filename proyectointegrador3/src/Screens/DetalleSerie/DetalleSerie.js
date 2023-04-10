import React, { Component } from 'react';

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            serie:{},
            generos: [],
            
        }

    }

    componentDidMount() {

       //fetch
       console.log(this.state.serie)
       fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=32a583d4ccec7f702faad954f990f1ba`)
       .then(resp => resp.json())
       .then(data => this.setState({
         serie : data ,
         generos : data.genres ,
       }))
       .catch(e => console.log(e))
         
       
    }
    render(){
        return (
            <React.Fragment>
                    { 
                        this.state.serie.title === 0 ? 
                        <div>
                            <p>Cargando... </p>
                        </div> 
                        : 
                        <div>
                            <h2>{this.state.serie.title}</h2>
                            
                            <div className=''>

                                <div className=''>
                                    <img src={`https://image.tmdb.org/t/p/w342/${this.state.serie.poster_path}`} alt={this.state.serie.title} />
                                </div>

                                <div className=''>
                                    <h3>Rating: {this.state.serie.popularity}</h3>
                                    <h3>Fecha de estreno: {this.state.serie.first_air_date}</h3>
                                    <p>Sinopsis: {this.state.serie.overview} </p>
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

export default DetalleSerie
