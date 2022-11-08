import categoriaServicios from "../../servicios/categoriaServicios";
import Estados from "../../enums/Estados";
import { useEffect, useState } from "react";

const TablaCategorias = () => {
  // Implementación de Hook de Cambio de Estado en una variable: Cuando cambia internamente sus datos
  const [listaCategorias, setListaCategorias] = useState([]);
  const [estado, setEstado] = useState(Estados.CARGANDO);
  const [criterio, setCriterio] = useState("");
  const [idBorrar, setIdBorrar] = useState("");
  const [categoriaBorrar, setCategoriaBorrar] = useState("");

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
  };

  // Implementación de Hook de Constructor: Cuando se carga la página u ocurre un cambio
  useEffect(() => {

    cargarDatos();
  }, []);

  // Función para conectar la búsqueda de la BD, basado en queries
  const buscarCategoria = async (event) => {
    event.preventDefault();

    try {
      const respuesta = await categoriaServicios.obtenerCategoriaPorCriterio(
        criterio
      );

      if (respuesta.data.length === 0) {
        setEstado(Estados.VACIO);
      } else {
        setListaCategorias(respuesta.data);
        setEstado(Estados.OK);
      }
    } catch (error) {
      setEstado(Estados.ERROR);
    }
  };

  // Función listener del input box para buscar
  const cambiarCriterio = (event) => {
    setCriterio(event.target.value);
  };

  // Funciónes para ejecutar la función de eliminar desde la BD
  const confirmarBorrado = (id, nombre) => {

    setIdBorrar(id);
    setCategoriaBorrar(nombre);
    //console.log(id + "/n" + nombre);
  }

  const borrarCategoria = async () => {

    await categoriaServicios.borrarCategoria(idBorrar);
    cargarDatos();

  }

  return (
    <div className="container">
      <h3 style={{ color: "#0A587A" }}>
        {" "}
        <i className="bi bi-card-list"></i> Lista de Categorías{" "}
        <a href="/categorias/form" className="btn btn-success btn-sm me-2">
          Agregar nuevo
        </a>
      </h3>
      <form>
        <input
          type="text"
          onChange={cambiarCriterio}
          value={criterio}
          id="criterio"
          name="criterio"
          placeholder="Búsqueda por: "
        />
        <button className="btn btn-sm btn-primary ms-2" onClick={buscarCategoria}>
          Buscar
        </button>
      </form>

      <table className="table table-sm table-striped table-bordered align-middle mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Habilitado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {estado === Estados.CARGANDO ? (
            <tr>
              <td align="center" colSpan="4">
                <button className="btn btn-primary" type="button" disabled>
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  ...Cargando...
                </button>
              </td>
            </tr>
          ) : estado === Estados.VACIO ? (
            <tr>
              <td align="center" colSpan="4">
                {" "}
                No hay datos.{" "}
              </td>
            </tr>
          ) : estado === Estados.ERROR ? (
            <tr>
              <td align="center" colSpan="4">
                {" "}
                Error. Intente nuevamente.{" "}
              </td>
            </tr>
          ) : (
            listaCategorias.map((categoria) => (
              <tr key={categoria._id}>
                <td>{categoria.nombre}</td>
                <td>{categoria.habilitado ? "Sí" : "No"}</td>
                <td>
                  <a href={"categorias/form/" + categoria._id} className="btn btn-info btn-sm me-2">Editar</a>
                  <button className="btn btn-danger btn-sm"
                    onClick={() => confirmarBorrado(categoria._id, categoria.nombre)}
                    data-bs-toggle="modal" data-bs-target="#modalBorrar"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="modal fade" id="modalBorrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Alerta de Eliminación</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              ¿Desea borrar Categoría: "{categoriaBorrar}"? 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={borrarCategoria}>Borrar</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TablaCategorias;
