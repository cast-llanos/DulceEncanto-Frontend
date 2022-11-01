import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/general/Header";
import Banner from "./componentes/general/Banner";
import TablaCategorias from "./componentes/categorias/TablaCategorias"
import logo from "../src/imgs/logo.jpg";
import FormCategorias from "./componentes/categorias/FormCategorias";
import TablaProductos from "./componentes/productos/TablaProductos";
import FormProductos from "./componentes/productos/FormProductos";
import React from "react";


function App() {
  return (
    <div>
      <div className  = "row">
        <img src={logo} alt=""/>
      </div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner></Banner>} exact></Route>
          <Route path="/categorias" element={<TablaCategorias></TablaCategorias>} exact></Route>
          <Route path="/categorias/form" element={<FormCategorias></FormCategorias>} exact></Route>
          <Route path="/productos" element={<TablaProductos></TablaProductos>} exact></Route>
          <Route path="/productos/form" element={<FormProductos></FormProductos>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
