import React, { Component } from 'react'

class DetallePelicula extends Component {

  constructor(props){
      super(props)
      this.state = {
        id:this.props.match.params.id,
        peliculas: [],
      }
  }

  componentDidMount(){
    fetch()
    .then(resp => resp.json)
    .then(data => 
      this.setState({peliculas:data}))
    .catch (e => console.log(e))
  }
  render() {
    return (
      <div>
         <p>info de cada pelicula</p>
      </div>
    )
  }
}

export default DetallePelicula