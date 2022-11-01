import categoriaServicios from "../../servicios/categoriaServicios"
import Estados from "../../enums/Estados"
import { useEffect, useState} from "react"

const TablaCategorias = () => {

    // Implementación de Hook de Cambio de Estado en una variable: Cuando cambia internamente sus datos
    const [listaCategorias, setListaCategorias] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);

    // Implementación de Hook de Constructor: Cuando se carga la página u ocurre un cambio
    useEffect(() => {

        const cargarDatos = async () => {

            try {
                const respuesta = await categoriaServicios.obtenerCategorias();

                if (respuesta.data.length === 0) {
                    setEstado(Estados.VACIO);
                } else {
                    setListaCategorias(respuesta.data);
                    setEstado(Estados.OK);
                }
            } catch (error) {
                setEstado(Estados.ERROR);
            }
        }

        cargarDatos();

    }, [])

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
                                    <td align="center" colSpan="4"> No hay datos. </td>
                                </tr>
                                ) :
                                (estado === Estados.ERROR) ?
                                (<tr>
                                    <td align="center" colSpan="4"> Error. Intente nuevamente. </td>
                                </tr>):
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