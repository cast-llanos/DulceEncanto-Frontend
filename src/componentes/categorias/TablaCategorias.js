import categoriaServicios from "../../servicios/categoriaServicios"

const TablaCategorias = () => {

    const listaCategorias = categoriaServicios.obtenerCategorias();

    return (
        <div className  = "container">
            <h3 style={{ color: "#0A587A"}}>Lista de Categorías <a href="/categorias/form" className= "btn btn-success btn-sm me-2">Agregar nuevo</a></h3>
            <table className="table table-sm table-striped table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Habilitado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaCategorias.map((categoria) => (
                            <tr>
                                <td>{categoria.nombre}</td>
                                <td>{categoria.habilitado ? "Sí" : "No"}</td>
                                <td>
                                    <button className= "btn btn-info btn-sm me-2">Editar</button>
                                    <button className= "btn btn-danger btn-sm">Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaCategorias;