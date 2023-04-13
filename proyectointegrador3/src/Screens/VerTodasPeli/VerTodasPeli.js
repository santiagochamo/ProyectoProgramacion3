import React, { Component } from 'react'

export default class VerTodasPeli extends Component {
  render() {
    return (
      <div>VerTodasPeli</div>
    )
  }
}

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