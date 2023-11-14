import { useEffect, useState } from 'react'
import { Header } from '../../Components/Header/index'
import { Produtos } from '../../Components/Produtos'
import '../../style/Geral.css'

export const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  
  const [data, setData] = useState([])
  let query = 'search'

  if(searchValue != '') {
    query = searchValue
  } else {
    query = 'search'
  }

  const handleSearch = (value) => {
    setSearchValue(value)
  }

  useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
                if (response.ok) {
                    const result = await response.json()
                    result.results.forEach(item => {
                        item.thumbnail = item.thumbnail.replace('-I.jpg', '-W.jpg')
                    })
                    setData(result.results)
                }
            } catch (error) {
                console.error('Erro ao buscar os dados da API:', error)
            }
        }

        fetchData()
    }, [searchValue])

  return (
    <div className="Home_Page">
      <Header onSearch={handleSearch} />

      <Produtos data={data} />
    </div>
  )
}
