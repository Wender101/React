import React from "react"
import logo from '../../Imgs/Icons/Logo.png'
import '../../Sass/AboutFilm.css'
import {BsPlay} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'

import ShowLogo from '../../Imgs/Others/Show Logo.png'

export default function About() {
    return (
        <section className="AboutFilm">
            {/* <div className="logo">
                <img src={logo} alt="Logo Netiflix"/>
                <span>SÉRIE</span>
            </div> */}
            {/* <img src={ShowLogo} alt="Logo da série" className="ShowLogo"/> */}

            <strong id="titleMovie">Assista à temporada 6 agora</strong>

            <p id="descMovie">As histórias bizarras não têm limete nesta série antológica que revela o pior da humanidade, suas maiores inveções e muito mais.</p>

            <div>
                <button className="StartBtn"><BsPlay style={{width:'20px', height:'20px'}} className="imgButton"/> Assistir</button>
                <button className="MoreInfoBtn"><AiOutlineInfoCircle style={{width:'20px', height:'20px', color:'#000'}} className="imgButton"/> More Info</button>
            </div>

        </section>
    )
}