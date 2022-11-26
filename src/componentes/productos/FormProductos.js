import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productoServicios from "../../servicios/productoServicios";

const FormProductos = () => {
  // Hook para navegar entre diferentes rutas
  const navigateTo = useNavigate();

  // Hook para capturar parámetros de la ruta, p.eg, id
  const { id } = useParams();

  // Hook UseState incorpora variables con la aplicación, que vincula JS con HTML, en forma de cascada.

  const [nombre, setNombre] = useState("");
  const [marca, setMarca] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [precio, setPrecio] = useState(0);
  const [keywords, setKeywords] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [imagen, setImagen] = useState("");
  const [disponibilidad, setDisponibilidad] = useState(false);

  const [titulo, setTitulo] = useState("");

  // Crear un objeto JSON cuando se presione el botón "Guardar"
  const guardarProducto = async (event) => {
    //Previene la auto-recarga de la página, que viene por defecto, evitando así perder info.
    event.preventDefault();

    try {
      const datosProducto = {
        nombre: nombre,
        marca: marca,
        presentacion: presentacion,
        precio: precio,
        keywords: keywords,
        categoria: categoria,
        disponibilidad: disponibilidad,
        imagen: imagen,
      };
      //console.log(categoriaNueva);

      if (id == null) {
        const respuesta = await productoServicios.guardarProducto(
          datosProducto
        );
      } else {
        const respuesta = await productoServicios.modificarProducto(
          id,
          datosProducto
        );
      }

      // Luego de guardado, que regrese a la lista de categorías
      navigateTo("/productos");
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  const cargarProducto = async () => {
    try {
      const respuesta = await productoServicios.obtenerProductoPorId(id);
      //console.log(respuesta.data);

      if (respuesta.status === 200) {
        setNombre(respuesta.data.nombre);
        setPrecio(respuesta.data.precio);
        setDisponibilidad(respuesta.data.disponibilidad);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  // Hook para usar la carga dinámica para capturar el id
  useEffect(() => {
    if (id != null) {
      setTitulo("Editar");

      document.getElementById("marca").disabled = "true";
      document.getElementById("presentacion").disabled = "true";
      document.getElementById("keywords").disabled = "true";
      document.getElementById("categoria").disabled = "true";
      document.getElementById("imagen").disabled = "true";

      cargarProducto();

    } else {
      setTitulo("Nuevo");
    }
  }, []);

  // Obtener los eventos de cambio de estado: cuando se ingresa información
  const cambiarNombre = (event) => {
    setNombre(event.target.value);
  };

  const cambiarMarca = (event) => {
    setMarca(event.target.value);
  };

  const cambiarPresentacion = (event) => {
    setPresentacion(event.target.value);
  };

  const cambiarPrecio = (event) => {
    setPrecio(parseInt(event.target.value));
  };

  const cambiarKeywords = (event) => {
    const input = event.target.value
    setKeywords(input.split(','));
  };

  const cambiarCategoria = (event) => {
    const input = event.target.value
    setCategoria(input.split(','));
  };

  const cambiarImagen = (event) => {
    setImagen(event.target.value);
  };

  // Obtener los eventos de cambio de estado: cuando se habilita o deshabilita
  const cambiarDisponibilidad = (event) => {
    setDisponibilidad(event.target.checked);
    };

  return (
    <div className="container">
      <h3 style={{ color: "#0A587A" }}> {titulo} Producto</h3>
      <article
        style={{
          border: "1px solid #0A587A",
          padding: "10px",
          background: "#F8EFFB",
        }}
      >
        <form className="row g-3 py-3" onSubmit={guardarProducto}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label">
                Nombre Producto
              </label>
              <input
                className="form-control form-control-sm"
                name="nombre"
                id="nombre"
                value={nombre}
                onChange={cambiarNombre}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label">
                Marca
              </label>
              <input
                className="form-control form-control-sm"
                name="marca"
                id="marca"
                value={marca}
                onChange={cambiarMarca}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label">
                Presentación
              </label>
              <input
                className="form-control form-control-sm"
                name="presentacion"
                id="presentacion"
                value={presentacion}
                onChange={cambiarPresentacion}
                type="text"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label py-1">
                Precio
              </label>
              <input
                className="form-control form-control-sm"
                name="precio"
                id="precio"
                value={precio}
                onChange={cambiarPrecio}
                type="text"
                placeholder=""
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label py-1">
                Keywords
              </label>
              <input
                className="form-control form-control-sm"
                name="keywords"
                id="keywords"
                value={keywords}
                onChange={cambiarKeywords}
                type="text"
                placeholder= "Separe utilizando ','"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label py-1">
                Categorías
              </label>
              <input
                className="form-control form-control-sm"
                name="categoria"
                id="categoria"
                value={categoria}
                onChange={cambiarCategoria}
                type="text"
                placeholder= "Separe utilizando ','"
                required
              />
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <label htmlFor="inputEmail4" class="form-label py-1">
                Imagen
              </label>
              <input
                className="form-control form-control-sm"
                name="imagen"
                id="imagen"
                value={imagen}
                onChange={cambiarImagen}
                type="text"
                placeholder="Ruta de Imagen"
                required
              />
            </div>
            <div className="col-md-6">
                            <label className="form-check-label" htmlFor="disponibilidad">
                                {" "}
                                Disponible{" "}
                            </label>
                            <div className="col-mt-4 form-check form-switch mt-2 ms-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="habilitado"
                                    id="habilitado"
                                    checked={disponibilidad}
                                    onChange={cambiarDisponibilidad}
                                />
                            </div>
                        </div>
          </div>
        </form>
        <buttom
                    className="btn btn-success btn-sm me-3"
                    onClick={guardarProducto}
                >
                    Registrar
                </buttom>
                <a href="/productos" className="btn btn-danger btn-sm me-2">
                    Cancelar
                </a>
      </article>
    </div>
  );
};

export default FormProductos;
