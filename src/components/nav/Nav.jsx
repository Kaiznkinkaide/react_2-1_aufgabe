
import { useState } from "react";
import "./nav.css"
import { Link } from "react-router-dom";

const Nav = () => {


    return ( 
        <>
        <nav>
        <Link  to="/">Speisekarte</Link>
        <Link  to="/kontakt">Kontakt</Link>
        <Link to="/oeffnnungszeiten">Öffnungszeiten</Link>
        <Link to="/galerie">Galerie</Link>
        </nav>
        </>
     );
}
 
export default Nav;