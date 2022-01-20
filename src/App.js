import React , {useEffect }from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router,} from "react-router-dom"
import {Paginas} from "./componentes/Paginas";
import { ProductosLista } from "./componentes/Productos";
import { DataProvider } from "./context/Dataprovider";
import { Carrito } from "./componentes/carrito";
import FirebaseApp from "./componentes/firebase/FirebaseApp";
import AppFirebase from "./componentes/firebase/AppFirebase";


function App() {

  return (

    <DataProvider>
    <div className="App">
      
      <Router>
      <Header />  
      <Carrito />
      <Paginas/>
      {/* <Usuario/> */}
      <FirebaseApp/>
      <AppFirebase/>

      </Router>
      <h1>Firebase @9</h1>

    </div>
    </DataProvider>

  );
}

export default App;
