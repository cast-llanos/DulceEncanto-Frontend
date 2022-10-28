const FormCategorias = () => {
    return (
        <div className="container">
            <h3>Adición de Categorías</h3>
            <form action="">
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" name="categoria" id="categoria" placeholder="" required />
                        <div class="invalid-feedback">
                            Nombre inválido. Ingrese de nuevo.
                        </div>
                    </div>
                    <div class="col-md-5">
                        <label for="habilitado" class="form-label">Habilitado</label>
                        <select class="form-select" id="country" required>
                            <option value="">Choose...</option>
                            <option>Sí</option>
                            <option>No</option>
                        </select>
                        <div class="invalid-feedback">
                            Seleccione una opción.
                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default FormCategorias;