import React from "react"

//? Style
import './StyleMaisOuvidasTopo.css'

import Musicas from '../Musicas/Musicas.jsx'

export default function MaisOuvidasTopo() {
    return (
        <article id="MaisOuvidasTopo">
            <h3>Mais tocadas</h3>

            <Musicas pesquisa={'Mais Tocadas'}></Musicas>
            <Musicas pesquisa={'Mais Tocadas'}></Musicas>
            <Musicas pesquisa={'Mais Tocadas'}></Musicas>
        </article>
    )
}