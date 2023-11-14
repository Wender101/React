import React from 'react'

//? Styles
import './StyleBarraDeProgressoMusica.css'

//? Imports

export default function BarraDeProgressoMusica({img, nomeMusica, autor}) {   
     
    function iconsBarraDeProgresso() {
        const buttonsBarraProgresso = document.getElementsByClassName('buttonsBarraProgresso')
        for (let i = 0; i < buttonsBarraProgresso.length; i++) {
            const btn = buttonsBarraProgresso[i]
            const iconText = btn.textContent.trim()
            if(iconText != '') {
                const imagePath = `src/assets/Imgs/icons/${iconText}.png`
                btn.style.backgroundImage = `url(${imagePath})`
                btn.textContent = ''
            }
        }
    } setTimeout(() => {
        iconsBarraDeProgresso()
    }, 1000)

    return (
        <div id='barraDeProgressoMusica'>
            <div id='localSobreMusicaBarraProgresso'>
                <img id='imgMusicaBarraProgresso' src={img} />
                <h3>{nomeMusica}</h3>
                <p>{autor}</p>
            </div>

            <div id='parteMeioProgresso'>
                <div id='localBtnsBarraProgresso'>
                    <button className='buttonsBarraProgresso iconsPequenosBarraProgresso'>Shuffle</button>
                    <button className='buttonsBarraProgresso'>LastSong</button>
                    <button className='buttonsBarraProgresso' id='btnPlay' onClick={PlayPauseMusic}>Play</button>
                    <button className='buttonsBarraProgresso'>NextSong</button>
                    <button className='buttonsBarraProgresso iconsPequenosBarraProgresso'>RepeateOne</button>
                </div>

                <div id='localBarraProgresso'>
                    <div class="barra-progresso">
                        <div class="progresso" id="barraProgresso"></div>
                        <div class="bolinha" id="bolinhaProgresso"></div>
                    </div>
                </div>
            </div>

            <div id='localVolumeBarraProgresso'>
                <button className='buttonsBarraProgresso'>CaixaDeSom</button>
                <div class="barra-progresso">
                    <div class="progresso"></div>
                    <div class="bolinha"></div>
                </div>
            </div>
        </div>
    )
}