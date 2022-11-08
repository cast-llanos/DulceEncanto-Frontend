import axios from "axios";

/*
const categorias = [
    {
        nombre : "Chocolates",
        habilitado : true
    },
    {
        nombre : "Cereales",
        habilitado : false
    },
    {
        nombre : "Galletas",
        habilitado : true
    },
    {
        nombre : "Frutos secos",
        habilitado : true
    }
]
*/

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {

    return axios.get("http://localhost:8000/api/categorias");
}

categoriaServicios.obtenerCategoriaPorCriterio = (query) => {

    return axios.get("http://localhost:8000/api/categorias?q=" + query)

}

categoriaServicios.obtenerCategoriaPorId = (id) => {

    return axios.get("http://localhost:8000/api/categorias/" + id)

}

categoriaServicios.guardarCategoria = (categoria) => {

    return axios.post("http://localhost:8000/api/categorias", categoria);

}

categoriaServicios.modificarCategoria = (id,categoria) => {

    return axios.put("http://localhost:8000/api/categorias/" + id, categoria);

}

categoriaServicios.borrarCategoria = (id) =>{

    return axios.delete("http://localhost:8000/api/categorias/" + id);

}

export default categoriaServicios;