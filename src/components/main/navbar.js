import React from 'react';
//import { useAuth0 } from '@auth0/auth0-react';


const Navbar = () => {
    /*
    const { user, isAuthenticated} = useAuth0();
    console.log(isAuthenticated);*/
    return (
            <div>
                <div className="w-100 shadow">
                    <nav className="navbar navbar-expand-sm navbar-dark sticky-top nav_color">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <p className="ms-auto text-light fs-4">Ha iniciado sesión</p>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
  
    
};

export default Navbar;