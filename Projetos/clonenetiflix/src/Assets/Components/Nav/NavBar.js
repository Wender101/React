import React from "react"
import NetflixLogo from '../../Imgs/Icons/NetflixLogo.png'
import '../../Sass/Nav.css'
import userPhoto from '../../Imgs/Icons/userPhoto.png'
import { FiSearch } from 'react-icons/fi'
import { MdOutlineNotificationsNone } from 'react-icons/md'

export default function Nav() {
    return (
        <nav>
            <ul>
                <img src={NetflixLogo} alt="Logo Netiflix"/>

                <li><a href="/">Início</a></li>
                <li><a href="/">Séries</a></li>
                <li><a href="/">Filmes</a></li>
                <li><a href="/">Bombando</a></li>
                <li><a href="/">Minha Lista</a></li>
                <li><a href="/">Navegar por idiomas</a></li>
            </ul>

            <ul>
                <FiSearch className="btnNav"/>
                <span>Infantil</span>
                <MdOutlineNotificationsNone className="btnNav"/>
                <img src={userPhoto} alt="Foto de perfil user Netiflix" className="userPhoto"/>
            </ul>
        </nav>
    )
}