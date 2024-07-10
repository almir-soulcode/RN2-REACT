import { Link } from "react-router-dom";

// Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houver links externos utilize a tag <a />

function Menu() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/ajuda">Ajuda</Link>
            </nav>
        </header>
    );
}

export default Menu;