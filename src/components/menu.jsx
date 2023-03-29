import { Link } from "react-router-dom";

export const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
            <Link to="/" className="nav-link active" >Sistema </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/nuevoUsuario" className="nav-link active" >Nuevo Usuario</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/mostrarUsuario" className="nav-link active" >Mostrar Usuario </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}