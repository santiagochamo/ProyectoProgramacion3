import React, { Component } from 'react'

class DetalleSerie extends Component {
  constructor(props){
    super(props)
    this.state = {
      id:this.props.match.params.id,
      series: [],
    }
}

componentDidMount(){
  fetch()
  .then(resp => resp.json)
  .then(data => 
    this.setState({series:data}))
  .catch (e => console.log(e))
}
render() {
  return (
    <div>
       <p>info de cada serie</p>
    </div>
  )
}
}


export default  DetalleSerie
