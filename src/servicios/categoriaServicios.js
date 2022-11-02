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

export default categoriaServicios;