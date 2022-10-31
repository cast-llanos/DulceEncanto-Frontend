import productoServicios from "../../servicios/productoServicios"

const TablaProductos = () => {

    const listaProductos = productoServicios.obtenerProductos();

    return (
        <div className  = "container">
            <h3 style={{ color: "#0A587A"}}>Lista de Productos <a href="/productos/form" className= "btn btn-success btn-sm me-2">Agregar nuevo</a></h3>
            <table className="table table-sm table-striped table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Precio</th>
                        <th>Keywords</th>
                        <th>Categoría</th>
                        <th>Disponibilidad</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaProductos.map((producto) => (
                            <tr>
                                <td>{producto.nombre}</td>
                                <td>{producto.marca}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.keywords}</td>
                                <td>{producto.categoria}</td>
                                <td>{producto.disponibilidad ? "Sí" : "No"}</td>
                                <td>{producto.imagen}</td>
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

export default TablaProductos;