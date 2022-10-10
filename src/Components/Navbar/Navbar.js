import { NavLink } from "react-router-dom";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar1">
            <div className="nav1">
                <ul>
                    <li>
                        <NavLink to="/Home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )

}