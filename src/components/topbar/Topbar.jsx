import "./topbar.scss"

import {BsJournalBookmarkFill, BsWhatsapp} from "react-icons/bs";      //ERROR in ./src/components/topbar/Topbar.jsx 25:42-50

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topLeft">
                    <a href = "#intro" className="logo">Priscilla Cabral</a>                   
                    
                </div>
                <div className="topRight">
                    <div className="itemContainer">
                        <BsJournalBookmarkFill className="icon"/>
                        <span>CRP 02/22596</span>
                    </div>
                    <div className="itemContainer">
                        <BsWhatsapp className="icon"/>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
