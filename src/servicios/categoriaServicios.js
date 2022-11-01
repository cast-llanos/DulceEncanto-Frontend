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

const categoriaServicios = {};

categoriaServicios.obtenerCategorias = () => {
    return categorias;
    //return [];
}

export default categoriaServicios;