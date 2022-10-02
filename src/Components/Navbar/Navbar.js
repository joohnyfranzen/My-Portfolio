import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav>
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
                </ul>
            </div>
        </nav>
    )

}