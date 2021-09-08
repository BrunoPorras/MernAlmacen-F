import React from 'react';
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {

    const { user, isAuthenticated, logout } = useAuth0();
    //console.log(isAuthenticated);
    return (isAuthenticated && (
        <div>
            <div className="w-100 shadow">
                <nav className="navbar navbar-expand-sm navbar-dark sticky-top nav_color">
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <p className="ms-auto text-light fs-4">Ha iniciado sesión: {user.name+"      "}</p>
                        </div>
                        <Link className="d-block p-3 text-light text-decoration-none a_class" to="/" onClick={()=> logout()}>
                            <p className="ms-auto text-light fs-4 btn btn-outline-dark">Cerrar sesión</p>
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )

    )

};

export default Navbar;
