import { useState } from "react"
import "./assets/sass/App.css"

export default function App() {
  const [conta, setConta] = useState('')

  function calcular() {
    try {
      // Substitua "x" por "*" e "÷" por "/" na string antes de avaliar
      const expressao = conta.replace(/x/g, "*").replace(/÷/g, "/");
      const resultado = eval(expressao);
      setConta(resultado.toString());
    } catch (error) {
      setConta("Erro");
    }
  }

  function handleClick(event) {
    const value = event.target.textContent;
    if (value === "=") {
      calcular();
    } else if (value === "AC") {
      setConta("");
    } else if (value === "+/-") {
      // Inverte o sinal do número atual
      setConta((prevConta) => {
        if (prevConta !== "" && prevConta !== "Erro") {
          return (parseFloat(prevConta) * -1).toString();
        }
        return prevConta;
      });
    } else {
      setConta((prevConta) => prevConta + value);
    }
  }

  return (
    <div id="App">
      <div id="screen">
        <div id="containerBolls">
          <div className="boll" />
          <div className="boll" />
          <div className="boll" />
        </div>

        <h1>{conta}</h1>
      </div>

      <table id="containerkeyboard" onClick={handleClick}>
        <tbody>
          <tr>
            <td className="first_row">AC</td>
            <td className="first_row">+/-</td>
            <td className="first_row">%</td>
            <td className="last_col">÷</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td className="last_col">x</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td className="last_col">-</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className="last_col">+</td>
          </tr>
          <tr>
            <td colSpan={2}>0</td>
            <td>,</td>
            <td className="last_col" onClick={calcular}>=</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
