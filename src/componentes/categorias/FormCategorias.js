import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import categoriaServicios from "../../servicios/categoriaServicios";

const FormCategorias = () => {

    // Hook para navegar entre diferentes rutas
    const navigateTo = useNavigate();

    // Hook para capturar parámetros de la ruta, p.eg, id
    const { id } = useParams();

    // Hook UseState incorpora variables con la aplicación, que vincula JS con HTML, en forma de cascada.
    const [nombre, setNombre] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const [titulo, setTitulo] = useState("");

    // Crear un objeto JSON cuando se presione el botón "Guardar"
    const guardarCategoria = async (event) => {

        //Previene la auto-recarga de la página, que viene por defecto, evitando así perder info.
        event.preventDefault();

        try {
            const datosCategoria = {
                nombre: nombre,
                habilitado: habilitado,
            };
            //console.log(categoriaNueva);

            if (id == null) {
                const respuesta = await categoriaServicios.guardarCategoria(datosCategoria);
            } else {
                const respuesta = await categoriaServicios.modificarCategoria(id, datosCategoria);
            }

            // Luego de guardado, que regrese a la lista de categorías
            navigateTo("/categorias");
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    const cargarCategoria = async () => {
        try {
            const respuesta = await categoriaServicios.obtenerCategoriaPorId(id);
            //console.log(respuesta.data);

            if (respuesta.status === 200) {
                setNombre(respuesta.data.nombre);
                setHabilitado(respuesta.data.habilitado);
            }
        } catch (error) {
            console.log("Error: " + error);
        }
    }

    // Hook para usar la carga dinámica para capturar el id
    useEffect(() => {
        if (id != null) {
            setTitulo("Editar");
            cargarCategoria();
        } else {
            setTitulo("Nueva");
        }

    }, [])

    // Obtener los eventos de cambio de estado: cuando se ingresa información
    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    };

    // Obtener los eventos de cambio de estado: cuando se habilita o deshabilita
    const cambiarHabilitado = (event) => {
        setHabilitado(event.target.checked);
    };


    return (
        <div className="container">
            <h3 style={{ color: "#0A587A" }}>{titulo} Categoría</h3>
            <article
                style={{
                    border: "1px solid #0A587A",
                    padding: "10px",
                    background: "#F8EFFB",
                }}
            >
                <form className="row g-3 py-3"
                    onSubmit={guardarCategoria}
                >
                    <div className="row">
                        <div className="col-md-5">
                            <label htmlFor="inputEmail4" className="form-label">
                                Nombre Categoría
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
                            <label className="form-check-label" htmlFor="habilitado">
                                {" "}
                                Habilitado{" "}
                            </label>
                            <div className="col-mt-4 form-check form-switch mt-2 ms-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    name="habilitado"
                                    id="habilitado"
                                    checked={habilitado}
                                    onChange={cambiarHabilitado}
                                />
                            </div>
                        </div>
                    </div>
                </form>
                <buttom
                    className="btn btn-success btn-sm me-3"
                    onClick={guardarCategoria}
                >
                    Registrar
                </buttom>
                <a href="/categorias" className="btn btn-danger btn-sm me-2">
                    Cancelar
                </a>
            </article>
        </div>
    );
};

export default FormCategorias;

/*
Implementación Lista Desplegable:

<div className="col-md-6">
<label for="inputState" class="form-label">Habilitado</label>
<select className="form-select" name="habilitado" id="habilitado" value ={habilitado} onChange={cambiaHabilitado}>
    <option selected>Seleccione una opción</option>
    <option value="1">Si</option>
    <option value="2">No</option>
</select>
</div>

*/
