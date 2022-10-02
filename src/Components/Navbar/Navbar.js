import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css"

export default function Navbar() {
    return(
        <nav>
            <div className="nav">
                <ul>
                    <li>
                        <Link>Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )

}