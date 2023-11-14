import React from 'react'

//? Style
import './StyleMusicasAleatorias.css'

//? Imports
import MusicasCaixa from '../MusicasCaixa/MusicasCaixa.jsx'

export default function MusicasAleatorias() {
  return (
    <article id='MusicasAleatorias'>
        <h1>Aleatórias</h1>
        <div id='localMusicasAleatorias'>
            <MusicasCaixa quantidade={10} pesquisa={'Aleatório'}/>
        </div>
    </article>
  )
}