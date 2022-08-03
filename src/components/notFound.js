import { Link } from "react-router-dom"

export const NotFound= ()=>{
    return(<>
        <p>No se encontró el juego</p>
        <img src="https://preview.redd.it/9ykzawhr4us61.png?auto=webp&s=cf46f3d270e06d06c12290b078d415e16e59d103" alt="img 404"/>
        <Link to="/home"><p>SALIR</p></Link> 
    </>)
}