import { LiaMapMarkerSolid } from 'react-icons/lia'
import { IoIosArrowDown } from 'react-icons/io'

import './styles/styles.css'
export const Nav = () => {
    return (
        <nav>
            <ul>
                <li id='locate'>
                    <LiaMapMarkerSolid />
                    <p>Digite seu endereço</p>
                </li>
                <li>
                   <p>Categorias</p>
                   <IoIosArrowDown id='icon_arrow'/>
                </li>
                <li>Ofertas do dia</li>
                <li>Histórico</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Contato</li>
            </ul>
        </nav>
    )
}