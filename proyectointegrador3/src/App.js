import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Screens/Home/Home"
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula"
import DetalleSerie from "./Screens/DetalleSerie/DetalleSerie"
import NotFound from "./Screens/NotFound/NotFound"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"

//importe de componentes 

function App() {
  return (
    
      <>

    
      <Header/>

        <Switch>
          <Route exact="true" path="/" component={Home}/>
          <Route  path="/DetallePelicula/DetallePelicula/id/:id" component={DetallePelicula}/>
          <Route  path="/DetalleSerie/DetalleSerie/id/:id" component={DetalleSerie}/>
          <Route  path="" component={NotFound}/>
        </Switch>
      
        <Footer />
   
      </>
  );
}

export default App;
