let estadoMusica = 'Play'

//? Vai dar play na música selecionada
function playMusic(listaMusicas, num = 0, oqFazer = 'Tocar') {
    const audioPlayer = document.getElementById('audioPlayer')

    if(oqFazer == 'Tocar') {
        if(Array.isArray(listaMusicas)) {
            audioPlayer.src = listaMusicas[num]
            audioPlayer.play()
    
        } else {
            audioPlayer.src = listaMusicas
            audioPlayer.play()
        }
    } else if(oqFazer == 'Pause') {
        audioPlayer.pause()

    } else if(oqFazer == 'Play') {
        audioPlayer.play()

    } else if(oqFazer == 'Next') {
        let contador = num + 1
        playMusic(listaMusicas, contador, 'Tocar')
    }

    //? ---------
    // const progressoDiv = document.querySelector('.progresso')
    // const bolinhaDiv = document.querySelector('.bolinha')

    // audioPlayer.addEventListener('timeupdate', () => {
    //   const progressoPercentual = (audioPlayer.currentTime / audioPlayer.duration) * 100
    //   progressoDiv.style.width = progressoPercentual + '%'
    //   bolinhaDiv.style.left = progressoPercentual + '%'
    // })
}

function PlayPauseMusic() {
    if(estadoMusica == 'Pause') {
        estadoMusica = 'Play'
        
    } else {
        estadoMusica = 'Pause'
    }
    
    playMusic('', '', estadoMusica)
}

//?-------------------