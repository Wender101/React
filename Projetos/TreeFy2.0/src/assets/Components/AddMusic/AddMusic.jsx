import React from 'react'

//? Styles
import './StyleAddMusic.css'

//? Imports
import Navbar from '../Home/Nav/NavBar.jsx'

export default function AddMusic() {
  return (
    <section id='AddMusicPage' className='Pages'>
      <Navbar></Navbar>

      <article>
        <h1>Poste suas músicas favoritas aqui</h1>

        <div id='fromPostMusica'>
          <p>Nome da Música</p>
          <input type="text" id='nomeMusicaPost' placeholder='Nome da música' onChange={checarPostar}/>
          <p>Atuor(a) da Música</p>
          <input type="text" id='autorMusicaPost' placeholder='Manuel Gomes...' onChange={checarPostar}/>
          <p>Gênero da Música</p>
          <input type="text" id='generoMusicaPost' placeholder='Pop, gospel, rock' onChange={checarPostar}/>

          <div id='localInputsUploadPostar'>
            <label for="uploadMusica">Upload da Música</label>
            <input type="file" name="uploadMusica" id="uploadMusica" accept="audio/*" className='inputUploads' onChange={checarPostar}></input>
            <label for="uploadImg">Upload da Imagem</label>
            <input type="file" name="uploadImg" id="uploadImg" accept="image/*" className='inputUploads' onChange={checarPostar}></input>
          </div>
        </div>


          <button id='btnPostar' onClick={postarMusica}>Postar</button>
      </article>
    </section>
  )
}