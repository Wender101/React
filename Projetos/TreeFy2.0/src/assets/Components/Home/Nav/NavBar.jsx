import React from "react"

import './StyleNav.css'

export default function Navbar() {
    return(
        <nav>
            <ul>
                <li className="liIcons">Perfil</li>
                <li className="liIcons">Logout</li>
                <li className="liIcons">Home</li>
                <li className="liIcons">Biblioteca</li>
                <li className="liIcons">AddMusic</li>
            </ul>
        </nav>
    )
}