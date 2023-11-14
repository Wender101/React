import {useState} from 'react'
import { FiSearch } from 'react-icons/fi'
import './style.css'

import api from './services/api'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  //? Vai buscar na APi as informações digitadas no input
  async function handleSearch() {
    const valorInput = input.replace(/\s/g, '') // Remove espaços em branco

    if(valorInput == '') {
      alert('Preencha o campo!')
      return

    } else {
      try {
        const response = await api.get(`${valorInput}/json`)
        setCep(response.data)
        setInput('')
        

      } catch (error) {
        alert(`Algo deu errado: ${error}`)
        setInput('')
      }
    }
  }

  return (
    <div className="App">
      <h1 className='title'>Buscador de CEP</h1>

      <div className="containerInput">
        <input 
          type="text" 
          placeholder="Digite um cep..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className='buttonSearch' onClick={handleSearch}>
          <FiSearch size={25} color="#fff"/>
        </button>
      </div>

      {/*? Vai verificar se tem alguma coisa dentro do "cep", 
      caso tenha, ele vai renderizar o main */}

      {Object.keys(cep).length > 0 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
  
          <span><strong>Rua | Avenida:</strong> {cep.logradouro}</span>
          <span><strong>Complemento:</strong> {cep.complemento}</span>
          <span><strong>Bairro:</strong> {cep.bairro}</span>
          <span><strong>Localidade:</strong> {cep.localidade} - {cep.uf}</span>
        </main>
      )}

    </div>
  )
}

export default App
