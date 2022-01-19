import "./intro.scss"

export default function intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                       <img src="assets/pri-psico-removebg-preview.png" alt=""></img> 
                </div>    
            </div>

            <div className="right">
                
                <div className="wrapper">
                    <img src="assets/logo-bg.png" alt=""></img>
                    <div className="container"><h2>Psicóloga Clínica e Atenção Psicossocial</h2></div>
                    
                    <h1>Adna Priscilla Cabral.</h1>
                    <h3>CRP 02/22596</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
              
            </div>
        </div>
    )
}
