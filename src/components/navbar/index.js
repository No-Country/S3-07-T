import { useLocation } from "react-router-dom";
import styles from "./navBar.module.css";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const location= useLocation();
    let navigate= useNavigate();
    return (
        <div className={(location.pathname === "/") ? styles.noNav : styles.navbar } >
            <div className={styles.nav}>
            <button className={styles.button} onClick={()=>navigate("/home")} > Inicio </button>
            <button className={styles.button} onClick={()=>navigate("/newgame")} > + Juego </button>
            </div> 
        </div>
    )
}