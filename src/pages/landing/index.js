
import { useNavigate } from "react-router-dom";
import styles from "./landing.module.css";
import { useDispatch } from "react-redux";
import { loadGenres } from "../../redux/actions";
import { useEffect } from "react";


export const Landing = () => {
    
    const dispat= useDispatch();

    useEffect(() => {
        dispat(loadGenres());
    },[dispat]);
    let navigate= useNavigate();

    return (
        <div className={styles.container} > 
            
            <button className={styles.button} onClick={()=>navigate("/home")} > Ingresar </button>
            
        </div>
    )
}

export default Landing;