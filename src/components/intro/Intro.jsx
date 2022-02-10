import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textFlow = useRef();
    useEffect(()=>{
        init(textFlow.current, { 
            showCursor: false, 
            strings: ['Psicóloga Clínica', 'Atenção Psicossocial' ] 
        });
    },[]);

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
                        <h3>CRP 02/22596</h3>
                        <h1>Adna Priscilla Cabral.</h1>
                        
                        <h2> <span ref={textFlow}>Psicóloga Clínica</span></h2>
                    </div>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""></img>
                </a>
              
            </div>
        </div>
    )
}
