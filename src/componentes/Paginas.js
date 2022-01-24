import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos";
import { ProductosDetalles } from "./Productos/ProductosDetalle";



export const Paginas = () =>{
  return (
  <div>
   <h1>Welcome to React Router Por fin!</h1>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<ProductosLista />} />
        <Route path="/producto/:id" element={<ProductosDetalles />} />


      </Routes>
   </div>
  )
}


