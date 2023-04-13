/*import React, { Component } from 'react'
import Peliculas from "../../Components/Peliculas/Peliculas"
class Favoritos extends Component {

    constructor(props){
        super(props)
        this.state = {
            favoritos: []
        }
    }

    componentDidMount(){
        let storage = localStorage.getItem("favoritos")
        if (storage !== null ){
            let storageArray = JSON.parse(storage)
            Promise.all(
                storageArray.map(id => {
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=32a583d4ccec7f702faad954f990f1ba/${id}`)
                        .then(resp => resp.json())
                        .then(data => data )
                    )
                })
            )
            .then(data => this.setState({
                favoritos: data
            }))
            .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <div>
                <Peliculas data={this.state.favoritos}/>
            </div>
        )
    }
}

export default Favoritos

*/
