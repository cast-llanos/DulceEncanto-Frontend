const TarjetaProducto = ({ producto }) => {

    const validarHabilitado = () => {

        if(!producto.habilitado){
            document.getElementById("carrito").disabled = "true";
        }
        
    }

    return (
        <div className="col-3 mb-2">
            <div className="card">
                <h6 className="card-header text-primary">{producto.nombre}</h6>
                <div className="card-body row">
                    <img src="" alt="producto" />
                    <h4 className="card-text">${producto.precio}</h4>
                    <p className="mb-auto" style={{fontSize:"12px"}}>Categorías:<br/>{producto.categoria.toString().replaceAll(",",", ")}</p>
                    <p className="mb-auto" style={{fontSize:"12px"}}>Keywords:<br/>{producto.keywords.toString().replaceAll(",",", ")}</p>
                    <button className="btn btn-primary" id="carrito" onFocus={validarHabilitado}><i class="bi bi-cart-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default TarjetaProducto;