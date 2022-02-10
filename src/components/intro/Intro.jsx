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
                    <img src="assets/logo-bg-small.png" alt=""></img>
                    <div className="textContainer">
                        <h2>Psicóloga Clínica e Atenção Psicossocial</h2>
                        <h1>Adna Priscilla Cabral.</h1>
                        <h3>CRP 02/22596</h3>
                    </div>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
              
            </div>
        </div>
    )
}
