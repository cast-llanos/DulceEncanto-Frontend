import axios from "axios";
const URI = "https://dulce-encanto-api.herokuapp.com/";

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {

    return axios.get(URI+"api/categorias");
}

categoriaServicios.obtenerCategoriaPorCriterio = (query) => {

    return axios.get(URI+"api/categorias?q=" + query)

}

categoriaServicios.obtenerCategoriaPorId = (id) => {

    return axios.get(URI+"api/categorias/" + id)

}

categoriaServicios.guardarCategoria = (categoria) => {

    return axios.post(URI+"api/categorias", categoria);

}

categoriaServicios.modificarCategoria = (id,categoria) => {

    return axios.put(URI+"api/categorias/" + id, categoria);

}

export default categoriaServicios;