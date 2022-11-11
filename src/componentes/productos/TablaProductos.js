import productoServicios from "../../servicios/productoServicios";
import Estados from "../../enums/Estados";
import { useEffect, useState } from "react";

const TablaProductos = () => {
  // Implementación de Hook de Cambio de Estado en una variable: Cuando cambia internamente sus datos
  const [listaProductos, setListaProductos] = useState([]);
  const [estado, setEstado] = useState(Estados.CARGANDO);

  // Implementación de Hook de Constructor: Cuando se carga la página u ocurre un cambio
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await productoServicios.obtenerProductos();

        if (respuesta.data.length === 0) {
          setEstado(Estados.VACIO);
        } else {
          setListaProductos(respuesta.data);
          setEstado(Estados.OK);
        }
      } catch (error) {
        setEstado(Estados.ERROR);
      }
    };

    cargarDatos();
  }, []);

  return (
    <div className="container">
      <h3 style={{ color: "#0A587A" }}>
        {" "}
        <i className="bi bi-card-list"></i> Lista de Productos{" "}
        <a href="/productos/form" className="btn btn-success btn-sm me-2">
          Agregar nuevo
        </a>
      </h3>
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
          {estado === Estados.CARGANDO ? (
            <tr>
              <td align="center" colSpan="9">
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
              <td align="center" colSpan="9">
                {" "}
                No hay datos.{" "}
              </td>
            </tr>
          ) : estado === Estados.ERROR ? (
            <tr>
              <td align="center" colSpan="9">
                {" "}
                Error. Intente nuevamente.{" "}
              </td>
            </tr>
          ) : (
            listaProductos.map((producto) => (
              <tr>
                <td>{producto.nombre}</td>
                <td>{producto.marca}</td>
                <td>{producto.precio}</td>
                <td>{producto.keywords.toString()
                        //<ul>
                        //{
                        //producto.keywords.array.forEach(element => {
                        //    (<li> element </li>)
                        //})
                        //</ul>
                    }</td>
                <td>{producto.categoria}</td>
                <td>{producto.disponibilidad ? "Sí" : "No"}</td>
                <td>{producto.imagen}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2">Editar</button>
                  <button className="btn btn-danger btn-sm">Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TablaProductos;
