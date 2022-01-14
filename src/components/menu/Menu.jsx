import React from 'react'
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#intro">Sobre mim</a>
                </li>
                <li>
                    <a href="#area">Áreas de atendimento</a>
                </li>
                <li>
                    <a href="#espaco">O espaço</a>
                </li>
                <li>
                    <a href="#depoimentos">Depoimentos</a>
                </li>
                <li>
                    <a href="#contato">Contato</a>
                </li>
                
            </ul>
            
        </div>
    )
}
