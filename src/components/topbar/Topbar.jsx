import "./topbar.scss"

import {BsJournalBookmarkFill, BsWhatsapp} from "react-icons/bs";      //ERROR in ./src/components/topbar/Topbar.jsx 25:42-50

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="topLeft">
                    <a href = "#intro" className="logo">Psicóloga Adna Priscilla Cabral</a>                   
                    
                </div>
                <div className="topRight">
                    <div className="itemContainer">
                        <BsJournalBookmarkFill className="icon"/>
                        <span className="crp">CRP 02/22596</span>
                    </div>
                
                    <div className="itemContainer">
                        <BsWhatsapp className="iconZap"/>
                        <span></span>
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
