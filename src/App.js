import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorias from "./categorias/TablaCategorias";
import Banner from "./general/Banner";
import Header from "./general/Header";

const App = () => {
  return (
    // Se retorna dentro del div, pues retorna un único elemento envoltorio
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} exact></Route>
          <Route path="/categorias" element={<TablaCategorias/>} exact></Route>
        </Routes>
      </BrowserRouter>
      <it>¡Hola mundo!</it>
    </div>
  );
}

export default App;
