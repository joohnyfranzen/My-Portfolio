import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <div className="navbar">
            <div className="nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}