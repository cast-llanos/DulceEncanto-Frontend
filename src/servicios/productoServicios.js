import axios from "axios"; // Trae las funcionalidades para conexión remota con la base de datos

/*
const productos = [
    {
        nombre : "Nutty Berry Mix",
        marca : "Nature's Heart",
        precio : 3500,
        keywords : ["snack","personal","fitness"],
        categoria : "Frutos secos",
        disponibilidad : true,
        imagen : "/images/nutty_cacahuetes.png"
    },
    {
        nombre : "M&Ms",
        marca : "Colombina",
        precio : 3000,
        keywords : ["botanas","mini","azucarados"],
        categoria : ["Frutos secos", "chocolates"],
        disponibilidad : true,
        imagen : "/images/m-ms.jpg"
    }
]
*/

const productoServicios = {};

productoServicios.obtenerProductos = () => {
    
    return axios.get("http://localhost:8000/api/productos"); 
}

export default productoServicios;