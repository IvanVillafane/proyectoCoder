import React from "react";
import {Switch,Route,Link} from "react-router-dom";
import Inicio from "./Inicio";
import { ProductosLista } from "./Productos";

export const Paginas = () =>{
  return (
   <section>
     <Switch>
           <Route path="/" exact component={Inicio} />
           <Route path="/"  exact component={ProductosLista}/>

           </Switch>
   </section>
  )
}


