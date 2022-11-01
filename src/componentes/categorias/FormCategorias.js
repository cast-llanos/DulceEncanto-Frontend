
const FormCategorias = () => {
    return (
        <div className="container">
            <h3 style={{ color: "#0A587A"}}>Nueva Categoría</h3>
            <article style={{border: "1px solid #0A587A", padding: "10px",background: "#F8EFFB"}}>
            <form action="" className= "row g-3 py-3">
                <div className="row">
                    <div className="col-md-6">
                        <label for="inputEmail4" class="form-label">Nombre Categoría</label>
                        <input className="form-control form-control-sm" type="text" name="categoria" id="categoria" placeholder="Ingrese categoría" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputState" class="form-label">Habilitado</label>
                        <select className="form-select" name="habilitado" id="habilitado">
                            <option selected>Seleccione una opción</option>
                            <option value="1">Si</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                </div>
            </form>
            <buttom className= "btn btn-success btn-sm me-2" py-3>Registrar</buttom>
            </article>
        </div>

    )
}

export default FormCategorias;