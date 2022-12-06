
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import searchEnginee from "./components/searchEngine";
import Login from './components/Login'

class App extends React.Component{
    render(){
        return(
         <div>
           <p>Find solutions</p>
           <BrowserRouter> 
             <Switch>
              <Route exact path="/" Component={ Login }/>
              <Route exact path="searchEnginee" Component={ searchEnginee } />
             </Switch>
           </BrowserRouter>
         </div>
        );
    }
}

export default App;
