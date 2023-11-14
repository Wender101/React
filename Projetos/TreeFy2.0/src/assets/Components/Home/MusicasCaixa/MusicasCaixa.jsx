import React, { useState, useEffect, useRef } from 'react';

//? Styles
import './StyleMusicasCaixa.css'

//? Imports

export default function MusicasCaixa({ quantidade, pesquisa }) {
  const [caixas, setCaixas] = useState([])

  useEffect(() => {
    let contador = 0
    const caixasTemp = []

    firebase
      .firestore()
      .collection('MusicasPostadas')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((Musica) => {
          const MusicasPostadas = Musica.data()

          if (contador < quantidade) {
            contador++
            caixasTemp.push(
              <div className='MusicaCaixa' key={contador} onClick={() => playMusic(MusicasPostadas.LinkAudio, 0)}>
                <div
                  className='imgMusica'
                  style={{ backgroundImage: `url(${MusicasPostadas.LinkImg})` }}
                ></div>
                <div className='textoMusicasCaixa'>
                  <h3 className='NomeMusicasCaixa'>{MusicasPostadas.NomeMusica}</h3>
                  <p className='AutorMusicasCaixa'>{MusicasPostadas.Autor}</p>
                </div>
              </div>
            )
          }
        })

        setCaixas(caixasTemp)
      })
      .catch((error) => {
        console.error('Erro ao obter documentos:', error)
      })
  }, [quantidade])

  return <>{caixas}</>
}
