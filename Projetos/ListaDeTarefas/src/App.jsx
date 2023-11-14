import { useRef, useState } from "react";
import { v4 } from "uuid";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import "./assets/Sass/App.css";

export default function App() {
  const [pesquisa, setPesquisa] = useState('')
  const inputRef = useRef();
  const textareaNovaMsg = useRef();
  const [msgs, setMsgs] = useState([]);
  const [arrayMsgs, setArrayMsgs] = useState(msgs);
  const [tipoMsg, setTipoMsg] = useState(false);

  function escreverMsg() {
    const DataAtual = new Date();
    let Ano = DataAtual.getFullYear();
    let Mes = DataAtual.getMonth() + 1;
    let Dia = DataAtual.getDate();

    if (Mes < 10) {
      Mes = `0${Mes}`;
    }

    if (Dia < 10) {
      Dia = `0${Dia}`;
    }

    const DataCompleta = `${Dia}/${Mes}/${Ano}`;

    setMsgs([
      {
        Mensagem: textareaNovaMsg.current.value,
        Id: v4(),
        Data: DataCompleta,
        Feito: false,
      },
      ...msgs,
    ]);

    cancelarMsg();
    pesquisarMsg()
  }

  function salvarPesquisa() {
    setPesquisa(inputRef)
    pesquisarMsg()
  }

  function pesquisarMsg() {
    if(pesquisa != '') {
      const resultadoPesquisa = msgs.filter((msg) => msg.Mensagem.includes(inputRef.current.value));
      setArrayMsgs(resultadoPesquisa);
    } else {
      setArrayMsgs(msgs)
    }
  }

  function deletarMsg(Id) {
    setMsgs(msgs.filter((msg) => msg.Id != Id));
  }

  function cancelarMsg() {
    document.getElementById("novaMsg").style.display = "none";
  }

  function marcarComoFeitaOuPendente(Id, NovoEstado) {
    setMsgs((prevMsgs) =>
      prevMsgs.map((msg) => {
        if (msg.Id === Id) {
          // Se o Id corresponder, atualize a propriedade 'Feito' para true
          return { ...msg, Feito: !NovoEstado };
        }
        return msg; // Mantenha as outras mensagens inalteradas
      })
    );

    pesquisarMsg()
  }

  function trocarTipoMsg(estado) {
    setTipoMsg(estado);
  }

  function abrirAddNovoMsg() {
    document.getElementById("novaMsg").style.display = "flex";
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => trocarTipoMsg(true)}>Feito</li>
          <li id="liPendente" onClick={() => trocarTipoMsg(false)}>
            Pendente
          </li>
        </ul>
      </nav>

      <div id="containerInputPesquisarNota">
        <FiSearch id="iconSearh"></FiSearch>
        <input
          cols="30"
          rows="10"
          id="inputPesquisarNota"
          placeholder="Pesquisar Nota"
          ref={inputRef}
          onChange={salvarPesquisa}
        ></input>
      </div>

      <main>
        {arrayMsgs.map((msg) => {
          let emoji;
          if (msg.Feito) {
            emoji = "❌";
          } else {
            emoji = "✔️";
          }

          if (msg.Feito == tipoMsg) {
            return (
              <div className="msgPendente" key={msg.Id}>
                <pre className="msg">{msg.Mensagem}</pre>

                <div className="footerMsg">
                  <span className="dataMsg">{msg.Data}</span>
                  <div className="btns">
                    <button
                      onClick={() =>
                        marcarComoFeitaOuPendente(msg.Id, msg.Feito)
                      }
                    >
                      {emoji}
                    </button>
                    <button onClick={() => deletarMsg(msg.Id)}>🗑️</button>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </main>

      <div id="novaMsg">
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Nova nota"
            ref={textareaNovaMsg}
          ></textarea>

          <div id="containerBtns">
            <button id="btnCancelar" onClick={cancelarMsg}>
              Cancelar
            </button>
            <button id="btnSalvar" onClick={escreverMsg}>
              Salvar
            </button>
          </div>
        </div>
      </div>

      <button id="adicionarMsg" onClick={abrirAddNovoMsg}>
        <AiOutlinePlus id="plusIcon"></AiOutlinePlus>
      </button>
    </div>
  );
}
