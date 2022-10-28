// Estructura dummy del objeto, cuyos componentes debe tener ser equivalentes a la creada en el Backend.
const categorias = [
    {
        "nombre": "Chocolates",
        "habilitado": true
    },
    {
        "nombre": "Bebidas Azucaradas",
        "habilitado": false
    }
];

// Declaración del objeto que contendrá la estructura de los servicios
const categoriaServicios = {};

categoriaServicios.listarCategorias = () => {
    return categorias;
}

export default categoriaServicios;
