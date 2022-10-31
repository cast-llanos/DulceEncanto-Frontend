const FormProductos = () => {
    return (
        <div className="container">
            <h3 style={{ color: "#0A587A" }}>Nuevo Producto</h3>
            <article style={{ border: "1px solid #0A587A", padding: "10px", background: "#F8EFFB" }}>
                <form action="" className="row g-3 py-3">
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Nombre Producto</label>
                            <input className="form-control form-control-sm" type="text" name="producto" id="producto" placeholder="Ingrese nombre del producto" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label">Marca</label>
                            <input className="form-control form-control-sm" type="text" name="marca" id="marca" placeholder="Ingrese marca" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label py-1">Precio</label>
                            <input className="form-control form-control-sm" type="text" name="precio" id="precio" placeholder="Ingrese nombre del producto" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label py-1">Keywords</label>
                            <input className="form-control form-control-sm" type="text" name="keywordsrca" id="keywords" placeholder="Ingrese las palabras claves separadas por coma (,)" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label py-1">Categoría</label>
                            <input className="form-control form-control-sm" type="text" name="categoria" id="categoria" placeholder="Ingrese la categoría o las categorías separadas por coma (,)" />
                        </div>
                        <div className="col-md-6">
                            <label for="inputEmail4" class="form-label py-1">Imagen</label>
                            <input className="form-control form-control-sm" type="text" name="imagen" id="imagen" placeholder="Ingrese la ubicación de la imagen" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label for="inputState" class="form-label py-1">Disponibilidad</label>
                            <select className="form-select" name="disponibildad" id="disponibilidad">
                                <option selected>Seleccione una opción</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </form>
                <buttom className="btn btn-success btn-sm me-2" py-3>Registrar</buttom>
            </article>
        </div>

    )
}

export default FormProductos;