import categoriaServicios from "../../servicios/CategoriaServicio";

const TablaCategorias = () => {
    const listaCategorias = categoriaServicios.listarCategorias();

    return (
        <div className="container">
            <h3> Lista Categorías <a href="/categorias/form" className="btn btn-sm btn-success">Agregar</a> </h3>
            <table className="table table-sm container">
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
                                <td>{categoria.habilitado ? "☑" : "☐"}</td>
                                <td>
                                    <button type="button" class="btn btn-primary btn-sm" >Editar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

/*
    De HTML a JS: Se usa {}
    De JS a HTML: Se usa ()
*/
export default TablaCategorias;