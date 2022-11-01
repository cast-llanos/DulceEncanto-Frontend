import categoriaServicios from "../../servicios/categoriaServicios"
import Estados from "../../enums/Estados"

const TablaCategorias = () => {

    let listaCategorias;
    let estado;

    const cargarPagina = () => {
        listaCategorias = categoriaServicios.obtenerCategorias();

        if (listaCategorias.length === 0) {
            estado = Estados.VACIO;
        } else {
            estado = Estados.OK;
        }

        estado = Estados.CARGANDO;

    }

    cargarPagina();

    return (
        <div className="container">
            <h3 style={{ color: "#0A587A" }}> <i className="bi bi-card-list"></i> Lista de Categorías <a href="/categorias/form" className="btn btn-success btn-sm me-2">Agregar nuevo</a></h3>
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
                        (estado === Estados.CARGANDO) ?
                            (
                                <tr>
                                    <td align="center" colSpan="4">
                                        <button className="btn btn-primary" type="button" disabled>
                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            ...Cargando...
                                        </button>
                                    </td>
                                </tr>
                            ) :
                            (estado === Estados.VACIO) ?
                                (<tr>
                                    <td align="center" colSpan="4"> No hay datos </td>
                                </tr>
                                ) :
                                (
                                    listaCategorias.map((categoria) => (
                                        <tr>
                                            <td>{categoria.nombre}</td>
                                            <td>{categoria.habilitado ? "Sí" : "No"}</td>
                                            <td>
                                                <button className="btn btn-info btn-sm me-2">Editar</button>
                                                <button className="btn btn-danger btn-sm">Eliminar</button>
                                            </td>
                                        </tr>
                                    )))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TablaCategorias;