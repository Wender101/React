function createLogin() {
    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    let inputNome = document.getElementById('inputNome').value

    //? Caso o nome do usuário for maior que 0
    if(inputNome.length > 0 && inputEmail.length > 0 && inputSenha.length > 0) {

        //? Vai cadastrar o usuário
        firebase.auth().createUserWithEmailAndPassword(inputEmail, inputSenha).then(RespNewUser => {
            //? Vai criar a conta do user no firebase
            let FotoPerfil
            if(RespNewUser.photoURL == undefined) {
                FotoPerfil = ''
            }

            const PerfilUser = {
                Nome: inputNome,
                Email: RespNewUser.user.email,
                FotoPerfil: FotoPerfil,
                Background: null,
                MusicasPostadas: [],
                MusicasCurtidas: [],
                Amigos: [],
                Seguidores: [],
                Seguindo: [],
                GostoMusical: {
                    Genero: [],
                    Autores: [],
                    Playlists: []
                }
            }

            db.collection('Users').add(PerfilUser).then(() => {
                location.href = location.href.replace('/Login', '')
                
            }).catch(error => {
                if(alert(`Ocorreu um erro ao salvar os dados: ${error}`)) {
                    location.reload()
                }
            })


        }).catch(error => {
            console.log(error)
    
            //? Caso o user tente cadastrar uma conta já existente
            if(error.code == 'auth/email-already-in-use') {
                if(confirm("Este e-mail já está em uso, deseja logar nele?")) {
                    location.href = location.href.replace('/Login', '')
    
                    //? Caso não queira logar na conta existente
                } else {
                    location.reload()
                }
    
            } else {
                if(alert('Algo deu errado, tente novamente.')) {
                    location.reload()
                }
            }
    
        })
    } else {
        if(inputNome.length <= 0) {
            animationinputs('Nome')
        }

        if(inputEmail.length <= 0) {
            animationinputs('Email')
        }

        if(inputSenha.length <= 0) {
            animationinputs('Senha')
        }
        btnCadastro.style.background = 'rgba(102, 102, 102, 0.13)'
    }
}

function loginEmail() {
    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    firebase.auth().signInWithEmailAndPassword(inputEmail, inputSenha).then(() => {
        location.href = location.href.replace('/Login', '')

    }).catch(error => {
        console.log(error)

        //? Caso a senha | email estejam errados
        if(error.code == 'auth/wrong-password') {
            if(alert('Email ou senha incorreto, tente novamente')) {
                document.getElementById('inputSenha').value = ''
            }

        } else {
            alert('Conta não encontrada.')
        }
    })
}

function abrirInputNome() {
    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    let inputNome = document.getElementById('inputNome').value
    
    let inputNome2 = document.getElementById('localInputNome')
    inputNome2.style.display = 'block'
    let localImgNome = document.getElementById('localImgNome')

    //? vai alterar o onclick do btn cadastro
    let btnCadastro = document.getElementById('btnCadastro')
    btnCadastro.removeEventListener("click", abrirInputNome)
    btnCadastro.addEventListener("click", createLogin)

    if(inputNome.length <= 0) {
        animationinputs('Nome')
    }

    if(inputEmail.length <= 0) {
        animationinputs('Email')
    }

    if(inputSenha.length <= 0) {
        animationinputs('Senha')
    }
}

function atualizarBtmCadastro() {
    let inputNome = document.getElementById('inputNome').value
    let inputEmail = document.getElementById('inputEmail').value
    let inputSenha = document.getElementById('inputSenha').value
    let btnCadastro = document.getElementById('btnCadastro')

    if(inputNome.length > 0 && inputEmail.length > 0 && inputSenha.length > 0) {
        btnCadastro.style.background = '#00FFD1'

    } else if(inputNome.length <= 0 || inputEmail.length <= 0 || inputSenha.length <= 0) {
        btnCadastro.style.background = 'rgba(102, 102, 102, 0.13)'
    }
}

function animationinputs(inputAnimation) {
    let inputInputAnimation = document.getElementById(`input${inputAnimation}`)
    inputInputAnimation.classList = 'inputAnimation'
    let localimgInputAnimation = document.getElementById(`localImg${inputAnimation}`)
    localimgInputAnimation.classList = 'inputAnimation2'

    setTimeout(() => {
        inputInputAnimation.classList.remove('inputAnimation')
        localimgInputAnimation.classList.remove('inputAnimation2')
    }, 900)
}