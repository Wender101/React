import { useState } from "react"

export default function Titulo({ cor }) {
    const [texto, setTexto] = useState("Um título do estado inicial")
    const [inputText, setInputText] = useState("")

    function clicou() {
        setTexto(inputText)
    }

    return (
        <div>
            <h1 style={{color: cor}}>{texto}</h1>
            <input type="text" value={inputText} onChange={(e) => {setInputText(e.target.value)}}/>
            <button onClick={clicou}>Mudar</button>
        </div>
    )
}

// export default function Titulo({valor, paragrafo, cor}) {
//     return (
//         <div>
//             <h1 style={{color: cor}}>Valor da Props: {valor ? valor : 'undefined'}</h1>

//             {paragrafo ?
//                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, pariatur ad. Veritatis sequi doloremque, iste voluptatem nam suscipit impedit obcaecati nulla placeat fugit dolorem doloribus repellat. Eveniet nesciunt repudiandae commodi?</p>
//                 : 
//                 <p>undefined</p>
//             }
//         </div>
//     )
// }