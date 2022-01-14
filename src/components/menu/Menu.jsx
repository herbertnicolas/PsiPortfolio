import React from 'react'
import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Sobre mim</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#area">Áreas de atendimento</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#espaco">O espaço</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#depoimentos">Depoimentos</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contato">Contato</a>
                </li>
                
            </ul>
            
        </div>
    )
}
