import React from 'react'

//? Styles
import '../assets/Sass/Login/Login.css'

//? Imports


export default function Login() {
  return (
    <>
      <section id='LoginPage' className='Pages'>
          <div id='imgFundo1' className='imgsFundoLogin'></div>
          <div id='imgFundo2' className='imgsFundoLogin'></div>
          <div id='imgFundo3' className='imgsFundoLogin'></div>
          <div id='imgFundo4' className='imgsFundoLogin'></div>

          <article id='localForm'>
            <p id='welcomeP'>Welcome to</p>
            <img src="src/assets/Imgs/Icons/LogoWithoutBoll.png" id="logo" />

            <div className='inputs'>
              <div id='localInputEmail'>
                <input type="email" id="inputEmail" placeholder='Email@gmail.com'/>
                <div id='localImgEmail'>
                  <img src="src/assets/Imgs/Icons/userIconWhite.png"/>
                </div>
              </div>

              <div id='localInputSenha'>
                <input type="password" id="inputSenha" placeholder='Senha 123456'/>
                <div id='localImgSenha'>
                  <img src="src/assets/Imgs/Icons/Key.png"/>
                </div>
              </div>

            <div id='localInputNome' style={{display: 'none'}}>
                <input type="text" id="inputNome" placeholder='Nome de usuário' onChange={atualizarBtmCadastro}/>
                <div id='localImgNome'>
                  <img src="src/assets/Imgs/Icons/userIcon2.png"/>
                </div>
            </div>
          </div>

            <p id='esqueciMinhaSenha'>Esqueci minha senha</p>

            <div className='localBtns'>
              <button id='btnLogin' onClick={loginEmail}>Login</button>
              <button id='btnCadastro' onClick={abrirInputNome}>Cadastrar-se</button>
            </div>
          </article>
      </section>
    </>
  )
}