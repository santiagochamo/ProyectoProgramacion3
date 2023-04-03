import React from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./Screens/Home/Home"
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula"
import NotFound from "./Screens/NotFound/NotFound"
//importe de componentes 

function App() {
  return (
    
      <>

    <Header />
      <Main>
        <Switch>
          <Route exact="true" path="/" component={Home}/>
          <Route  path="/DetallePelicula/DetallePelicula/id/:id" component={DetallePelicula}/>
          <Route  path="" component={NotFound}/>
        </Switch>
      </Main>
    <Footer />
   
      </>
  );
}

export default App;
