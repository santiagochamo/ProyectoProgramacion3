import React, { Component } from 'react'

class Buscador extends Component {

  constructor(props){
    super(props)
    this.state = {
      valorInput: "",
    }
  }

  evitarSubmit(event){
    event.preventDefault()
  }

  metodoQueFiltra(texto, arraySerFiltrado){
    let filtrado = arraySerFiltrado.filter((elm) => elm.name.toLowerCase().includes(texto.toLowerCase()))
    return filtrado
  }

  guardarValor(event){
      this.setState({
        valorInput: event.target.value
      },
      () => this.props.metodoQueFiltra(this.state.valorInput, this.props.contenido)
      )
  }

  metodoQueEnvia(){
    console.log("enviamos la info.")
  }
  render() {
    return (
    <form onSubmit={(event)=> this.evitarSubmit(event)}>
        <div>
            <label>Busca lo que quieras</label>
        </div>
        <div>
            <input onChange={(event)=> this.guardarValor(event)} value={this.state.valorInput}/>
        </div>
        <button onClick={() => this.metodoQueEnvia()}>Enviar consulta</button> 
    </form>
    )
}
}

export default Buscador