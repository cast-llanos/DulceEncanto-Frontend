
const Header = () => {
    return (
        <div>
            <header className="d-flex flex-wrap justify-content-center px-3 py-3 mb-3" style={{ backgroundColor: "#FAB900" }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none" style={{ color: "#ffff00" }}>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item"><a href="/" className="nav-link active" aria-current="page">Inicio</a></li>
                    <li className="nav-item"><a href="/categorias" className="nav-link" style={{ color: "#000000" }}>Categorías</a></li>
                    <li className="nav-item"><a href="/productos" className="nav-link" style={{ color: "#000000" }}>Productos</a></li>
                </ul>
            </header>
        </div>
    )
}

export default Header;