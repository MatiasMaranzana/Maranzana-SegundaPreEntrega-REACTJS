import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
return (
    <header >
        <Link to="/">
            <img src={"../public/logo.gif"} alt="logo" />
        </Link>

        <nav>
            <ul>
                <li>
                    <NavLink to="/"> Todos los productos </NavLink>
                
                </li>

                <li>
                    <NavLink to="/categoria/Proteina"> Proteinas</NavLink>
                </li>

                <li>
                    <NavLink to="/categoria/Creatina"> Creatina </NavLink> 
                </li>
                <li>
                    <NavLink to="/categoria/Multivitaminico"> Multivitaminico </NavLink> 
                </li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
)
}

export default NavBar
