import { useRef, useState } from "react"
import { v4 } from "uuid"

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const inputRef = useRef()

  function cliquei() {
    setProdutos([{ id: v4(), nome: inputRef.current.value }, ...produtos])
    inputRef.current.value = ''
  }

  function DeletarProduto(id) {
    setProdutos(produtos.filter(produto => produto.id != id))
  }

  return (
    <>
      <h1>Lista de Compras</h1>
      <input placeholder="Produto..." ref={inputRef} />
      <button onClick={cliquei}>Adicionar</button>

      {produtos.map((produto) => {
        return (
          <div key={produto.id}>
            <p>{produto.nome}</p>
            <button onClick={() => DeletarProduto(produto.id)}>🗑️</button>
          </div>
        )
      })}
    </>
  );
}
