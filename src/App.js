import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/general/Header";
//import Banner from "./componentes/general/Banner";
import Catalogo from "./componentes/productos/Catalogo";
import TablaCategorias from "./componentes/categorias/TablaCategorias"
import logo from "../src/imgs/logo.jpg";
import FormCategorias from "./componentes/categorias/FormCategorias";
import FormProductos from "./componentes/productos/FormProductos";
import TablaProductos from "./componentes/productos/TablaProductos";
import Login from "./componentes/general/Login";
import Dashboard from "./componentes/general/Dashboard";
import Administradores from "./componentes/general/Administradores";
import { ContextoUsuario } from "./componentes/general/ContextoUsuario";
import { useState } from "react";

function App() {
  const [usuario, setUsuario] = useState({nombres: "", estadologin: 0});
  return (
    <>
      <div className="row">
        <img src={logo} alt="" />
      </div>
      <BrowserRouter>
        <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
          <Header/>
          <Routes>
            <Route path="/" element={<Catalogo />} exact />
            <Route path="/login" element={<Login />} exact />
            <Route path="/administradores" element={<Administradores />} exact />
            <Route path="/dashboard" element={<Dashboard />} exact />
            <Route path="/categorias" element={<TablaCategorias></TablaCategorias>} exact/>
            <Route path="/categorias/form" element={<FormCategorias></FormCategorias>} exact/>
            <Route path="/categorias/form/:id" element={<FormCategorias />} exact/>
            <Route path="/productos" element={<TablaProductos></TablaProductos>} exact/>
            <Route path="/productos/form" element={<FormProductos></FormProductos>} exact/>
            <Route path="/productos/form/:id" element={<FormProductos />} exact/>
          </Routes>
        </ContextoUsuario.Provider>
      </BrowserRouter>
    </>
  );

  //Add Banner to the root: <Route path="/" element={<Banner></Banner>} exact></Route>
}

export default App;
