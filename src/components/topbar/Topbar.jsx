import "./topbar.scss"
import {MailIcon} from '@mui/icons-material/Mail';      //ERROR in ./src/components/topbar/Topbar.jsx 25:42-50
import {BookIcon} from '@mui/icons-material/Book';     //ERROR in ./src/components/topbar/Topbar.jsx 25:42-50

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topLeft">
                    <a href = "#intro" className="logo">Início</a>
                    
                    <div className="itemContainer">
                        <MailIcon className="icon"/>
                        <span></span>
                    </div>
                    <div className="itemContainer">
                        <BookIcon className="icon"/>
                        <span>CRP 02/22596</span>
                    </div>
                </div>
                <h1>Priscilla Cabral</h1>
                <div className="topRight">

                </div>
            </div>
        </div>
    )
}
