import { useEffect, useState } from 'react'
import './styles/styles.css'

// eslint-disable-next-line react/prop-types
export const Produtos = ({ data }) => {
    // console.log(data);
    const maxPerPage = 15;
    const [page, setPage] = useState(1)

    useEffect(() => {
        // Reset para a página 1 quando novos dados são fornecidos
        setPage(1)
    }, [data])

    // eslint-disable-next-line react/prop-types
    const totalPages = Math.ceil(data.length / maxPerPage)
    const startIndex = (page - 1) * maxPerPage
    const endIndex = startIndex + maxPerPage
    // eslint-disable-next-line react/prop-types
    const resultsPerPage = data.slice(startIndex, endIndex)

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1)
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    const precoFormatado = (preco) => preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    return (
        <section id='container_local_produtos'>
            <article id='container_products'>
                {resultsPerPage.map(resultados => (
                    <div className="container_products" key={resultados.id}>
                        <div className="container_products" key={resultados.id}>
                            <a href={resultados.permalink} target="_blank" rel="noopener noreferrer">
                                <div className="container_img">
                                    <img src={resultados.thumbnail} alt="" />
                                </div>
                                <div className="info_products">
                                    <span className="title_products">{resultados.title}</span>
                                    <p className="price_products">{precoFormatado(resultados.price)}</p>
                                    <p className="price_products2">em 12x {precoFormatado(parseFloat((resultados.price / 12).toFixed(2)))}</p>
                                    <span className="state_frete">Frete grátis</span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </article>

            <div id='container_pages'>
                {page !== 1 && <button onClick={handlePreviousPage}> &lt; Anterior</button>}
                <div>
                    <p>{page} de {totalPages}</p>
                </div>
                {page !== totalPages && <button onClick={handleNextPage}>Seguinte &gt;</button>}
            </div>
        </section>
    )
}
