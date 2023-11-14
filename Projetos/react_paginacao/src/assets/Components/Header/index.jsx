import { useState } from 'react'
import { Nav } from "../Nav"
import { CiSearch } from 'react-icons/ci'
import { TbMenu2 } from 'react-icons/tb'
import { Banners } from "../Banners"
import { CiDark } from "react-icons/ci"
import { CiLight } from "react-icons/ci"

import './styles/styles.css'

// eslint-disable-next-line react/prop-types
export const Header = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('')
    
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        // eslint-disable-next-line no-constant-condition
        if(e.key == 'Enter' || 'buttonPesquisa') {
            onSearch(inputValue)
        }
    }

    let themeLight = true

    const ligthTheme = {
        '--darkGray': '#33333349',
        '--light-gray': '#ebebeb',
        '--lightColorInfos': 'rgba(0, 0, 0, 0.493)',
    }

    const darkTheme = {
        '--darkGray:': '#2C2C2C',
        '--light-gray': '#7E7E7E',
        '--lightColorInfos': '#080101',
    }

    const handleChangeTheme = () => {
        console.log('handleChangeTheme');
        themeLight ? changeTheme(darkTheme) : changeTheme(ligthTheme)
        themeLight = !themeLight
    }

    const changeTheme = (theme) => {
        console.log('changeTheme');
        for (let [proeperty, value] of Object.entries(theme)) {
            changeProperty(proeperty, value)
        }
    }

    function changeProperty(proeperty, value) {
        console.log('changeProperty');
        const rootElement = document.documentElement //? Vai pegar o root
        rootElement.style.setProperty(proeperty, value)
    }

    return (
        <header>
            <ul>
                <li className='pc_model'>
                    <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.5/mercadolibre/logo-pt__large_plus.png" alt="Logo do mercado livre" />
                </li>
                <li className='mobile_model' id='logo_mobile'>
                    <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.5/mercadolibre/logo__small@2x.png" alt="Logo do mercado livre" />
                </li>
                <li id="input_search">
                    <input type="search" placeholder="Buscar produtos, marcas e muito mais" onChange={handleChange} />
                    <div id="container_icon_search" onClick={() => handleSearch('buttonPesquisa')}>
                        <CiSearch />
                    </div>
                </li>
                <li id="patrocinios" className='pc_model'>
                    <img src="https://http2.mlstatic.com/D_NQ_749624-MLA71075230097_082023-OO.webp" alt="disney e meli+" />
                    <CiDark className='iconTheme' id='iconDark' onClick={handleChangeTheme}/>
                    <CiLight className='iconTheme' id='iconLight' onClick={handleChangeTheme}/>
                </li>
                <li className='mobile_model'>
                    <TbMenu2 id='icon_menu'/>
                </li>
            </ul>

            <Nav />
            <Banners />
        </header>
    )
}