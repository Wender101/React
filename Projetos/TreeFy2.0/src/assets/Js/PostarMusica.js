let prontoParaPostar = false
let arquivoImg
let arquivoAudio
function checarPostar() {

    try {
        let nomeMusicaPost = document.getElementById('nomeMusicaPost')
        let autorMusicaPost = document.getElementById('autorMusicaPost')
        let generoMusicaPost = document.getElementById('generoMusicaPost')
        let uploadMusica = document.getElementById('uploadMusica')
        let uploadImg = document.getElementById('uploadImg')
        let btnPostar = document.getElementById('btnPostar')

        uploadImg.addEventListener('change', (event) => {
            arquivoImg = event.target.files[0]
        })

        uploadMusica.addEventListener('change', (event) => {
            arquivoAudio = event.target.files[0]
        })

        if(nomeMusicaPost.value.length > 0 && autorMusicaPost.value.length > 0 && generoMusicaPost.value.length > 0 && uploadMusica.value.length > 0 && uploadImg.value.length > 0) {
            btnPostar.style.background = 'rgb(13, 203, 169)'
            prontoParaPostar = true

        } else {
            btnPostar.style.background = 'rgba(102, 102, 102, 0.13)'
            prontoParaPostar = false
        }
    } catch (error) {}
}

function postarMusica() {
    let carregando = document.getElementById('carregando')
    
    if (prontoParaPostar){
        let uid = generateUniqueUid()
        let ref = firebase.storage().ref(`MusicasPostadas/${uid}`)
        carregando.style.display = 'flex'

        let tarefaDeUpload = ref.child(arquivoImg.name).put(arquivoImg)

        //? Vai enviar a img
        tarefaDeUpload.on(arquivoImg.name, 
            (snapshot) => {}, 
            (error) => {alert('Algo deu errado ao enviar a imagem: ' + error)}, 
            () => {
                tarefaDeUpload.snapshot.ref.getDownloadURL().then(url => {
                const urlImg = url

                //? Vai enviar o audio
                let tarefaDeUpload2 = ref.child(arquivoAudio.name).put(arquivoAudio)
                tarefaDeUpload2.on(arquivoAudio.name, 
                    (snapshot) => {}, 
                    (error) => {alert('Algo deu errado ao enviar o audio: ' + error)}, 
                    () => {
                        tarefaDeUpload2.snapshot.ref.getDownloadURL().then(url => {
                        const urlAudio = url

                        let NovaMusica = {
                            EmailUser: currentUser.email,
                            LinkImg: urlImg,
                            LinkAudio: urlAudio,
                            NomeMusica: document.getElementById('nomeMusicaPost').value,
                            Autor: document.getElementById('autorMusicaPost').value,
                            Genero: document.getElementById('generoMusicaPost').value,
                            Letra: []
                        }

                        //? Vai adicionar a nova música no firebase
                        db.collection('MusicasPostadas').doc(uid).set(NovaMusica).then(() => {

                            db.collection('Users').get().then(snapshot => {
                                snapshot.docs.forEach(resp => {
                                    let Users = resp.data()

                                    if(Users.Email == currentUser.email) {
                                        let MusicasPostadas = Users.MusicasPostadas
                                        MusicasPostadas.push(uid)
                                        db.collection('Users').doc(resp.id).update({MusicasPostadas: MusicasPostadas}).then(() => {
                                            carregando.style.display = 'none'

                                            setTimeout(() => {
                                                alert('Música postada com sucesso!')
                                                limparImputs()
                                            }, 700)
                                        })
                                    }
                                })
                            })
                        }, (error) => {
                            console.warn(error)
                        })
                    })
                })
            })
        })
    }
}

function limparImputs() {
    document.getElementById('nomeMusicaPost').value.length = 0
    document.getElementById('autorMusicaPost').value.length = 0
    document.getElementById('generoMusicaPost').value.length = 0
    document.getElementById('uploadMusica').value.length = 0
    document.getElementById('uploadImg').value.length = 0
    document.getElementById('btnPostar').value.length = 0

    fecharAbas()
}