import React from 'react'

//? Styles
import '../assets/Sass/Home/Home.css'

//? Imports
import Navbar from '../assets/Components/Home/Nav/NavBar.jsx'
import Banners from '../assets/Components/Home/Banners/Banners.jsx'
import MaisOuvidasTopo from '../assets/Components/Home/MaisOuvidasTopo/MaisOuvidasTopo.jsx'
import AddMusic from '../assets/Components/AddMusic/AddMusic.jsx'
import MusicasAleatorias from '../assets/Components/Home/MusicasAleatorias/MusicasAleatorias.jsx'
import BarraDeProgressoMusica from '../assets/Components/Home/BarraDeProgressoMusica/BarraDeProgressoMusica.jsx'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id='HomePage'>
          <Banners />
          <MusicasAleatorias />

        </section>


        {/*? Paginas */}
        <AddMusic />

        {/*? Barra de pesquisa */}
        <BarraDeProgressoMusica />
      </main>
    </>
  )
}