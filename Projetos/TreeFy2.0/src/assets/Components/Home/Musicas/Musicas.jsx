import React, { useState, useEffect } from 'react'

//? Style
import './Musicas.css'

let contador = 0
export default function Musicas(Pesquisa) {
    contador = contador + 0.5

    setTimeout(() => {
        contador = 0
    }, 2000)

    return (
        <div className="Musicas">
            <div>
                <div>
                    <span className="contadorMusicas">{contador}</span>

                    <img src="https://firebasestorage.googleapis.com/v0/b/treefy-3e5ae.appspot.com/o/af1-%20lilbubblegum%20(sped%20up)%2Fimages%20(1).jpeg?alt=media&token=721123f4-7942-47b9-a56a-54fb5fde8909" className="imgMusica"/>

                    <div className="sobreMusica">
                        <p>Nome música</p>
                        <span>Nome autor</span>
                    </div>
                </div>

                <div className="containerHeart">
                    <img src="src/assets/Imgs/Icons/Heart.png" className="heart"/>
                </div>
            </div>

            <hr/>
        </div>

    )
}