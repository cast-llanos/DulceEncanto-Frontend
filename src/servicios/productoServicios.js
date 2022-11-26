import axios from "axios"; // Trae las funcionalidades para conexión remota con la base de datos

const URI = "https://dulce-encanto-api.herokuapp.com/";
//const URI = "http://localhost:8000/"

const productoServicios = {};

productoServicios.obtenerProductos = () => {
    
    return axios.get(URI + "api/productos"); 
}

productoServicios.obtenerProductoPorCriterio = (query) => {

    return axios.get(URI + "api/productos?q=" + query)

}

productoServicios.obtenerProductosDisponibles = () => {

    return axios.get(URI + "api/productos?habilitado=true")

}

productoServicios.obtenerProductoPorCriterioDisponible = (query) => {

    return axios.get(URI + "api/productos?q=" + query + "&habilitado=true")

}

productoServicios.obtenerProductoPorId = (id) => {

    return axios.get(URI + "api/productos/" + id)

}

productoServicios.guardarProducto = (producto) => {

    return axios.post(URI + "api/productos/", producto);

}

productoServicios.modificarProducto = (id,productos) => {

    return axios.put(URI + "api/productos/" + id, productos);

}

productoServicios.borrarProducto = (id) =>{

    return axios.delete(URI + "api/productos/" + id);

}

export default productoServicios;