import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import FormCategorias from "./componentes/categorias/FormCategorias";
import Banner from "./componentes/general/Banner";
import Header from "./componentes/general/Header";

const App = () => {
  return (
    // Se retorna dentro del div, pues retorna un único elemento envoltorio
    <div>
      <Header/>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Banner />} exact></Route>
          <Route path="/categorias" element={<TablaCategorias/>} exact></Route>
          <Route path="/categorias/form" element={<FormCategorias />} exact></Route>
        </Routes>
      </BrowserRouter>
      <it>¡Hola mundo!</it>
    </div>
  );
}

export default App;
