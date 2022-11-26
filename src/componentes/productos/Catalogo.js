import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Estados from "../../enums/Estados";
import productoServicios from "../../servicios/productoServicios";
import TarjetaProducto from "./TarjetaProducto";

import img1 from "../../imgs/chocolate.jpg";
import img2 from "../../imgs/confiteria.jpg";
import img3 from "../../imgs/galleta.jpg";

const Catalogo = () => {

	const query = useLocation();
	const [estado, setEstado] = useState(Estados.OK);
	const [productos, setProductos] = useState([]);
	const [criterio, setCriterio] = useState("");

	const cargarProductos = async (categoria = " ") => {

		setEstado(Estados.CARGANDO);

		try {

			let resultado;

			if (criterio !== "") {

				resultado = await productoServicios.obtenerProductoPorCriterioDisponible(criterio);
			}else if (categoria !== "") {

				resultado = await productoServicios.obtenerProductoPorCriterioDisponible(categoria);
			}else {

				resultado = await productoServicios.obtenerProductosDisponibles();
			}

			if (resultado.data.length === 0) {

				setEstado(Estados.VACIO);
			}else {

				setProductos(resultado.data);
				//console.log(resultado.data);
				setEstado(Estados.OK);
			}
		} catch (error) {

			setEstado(Estados.ERROR);
			//console.log(error);
		}
	}

	const cambiarCriterio = (event) => {
		setCriterio(event.target.value);
	}

	const buscarProductos = (event) => {
		event.preventDefault();
		cargarProductos();
	}

	useEffect(() => {
		const catBuscar = query.search.replace("?q=", "");
		cargarProductos(catBuscar);
	}, [])

	return (
        <div>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt=""/>

                <div className="container">
                    <div className="carousel-caption text-start">
                        <p><a className="btn btn-lg btn-warning" href="/">Chocolates</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt=""/>

                <div className="container">
                    <div className="carousel-caption">
                        <p><a className="btn btn-lg btn-primary" href="/">Confitería</a></p>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
            <img src= {img3} className="d-block w-100" alt=""/>

                <div className="container">
                    <div className="carousel-caption text-end">
                        <p><a className="btn btn-lg btn-light" href="/">Galletas</a></p>
                    </div>
                </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
		<main id="catalogo" className="container-fluid">
			<form className="mt-2 mb-2">
				<div className="d-flex">
					<label className="form-label me-2" htmlFor="criterio">Buscar producto: </label> 
					<input className="form-control form-control-sm me-1" style={{maxWidth:"300px"}} onChange={cambiarCriterio} value={criterio} type="text" id="criterio" name="criterio" />
					<button onClick={buscarProductos} className="btn btn-sm btn-primary"><i className="bi bi-search" /></button>
				</div>
			</form>
			<div className="row mb-2">
				{
					estado === Estados.CARGANDO ? 
                    (
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
                    ) 
				: 
					estado === Estados.VACIO ?
                    (
                        <tr>
                          <td align="center" colSpan="4">
                            {" "}
                            No hay datos.{" "}
                          </td>
                        </tr>
                    ) 
				: 
                    estado === Estados.ERROR ? 
                    (
                    <tr>
                      <td align="center" colSpan="4">
                        {" "}
                        Error. Intente nuevamente.{" "}
                      </td>
                    </tr>
                    )
                :       
					productos.map((producto) => (
						(<TarjetaProducto key={producto._id} producto={producto}/>)
					))
				}
			</div>
		</main>
        </div>
	);
}

export default Catalogo;