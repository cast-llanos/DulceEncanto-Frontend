import axios from "axios"; // Trae las funcionalidades para conexión remota con la base de datos
const URI = "https://dulce-encanto-api.herokuapp.com/";
const productoServicios = {};

productoServicios.obtenerProductos = () => {
    
    return axios.get(URI+"api/productos"); 
}

export default productoServicios;