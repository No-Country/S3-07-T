import styles from "./footer.module.css";
import { useLocation } from "react-router-dom";

export const Footer = () => {

    const location= useLocation();

    return (
        <div  className={(location.pathname ===  "/") ? styles.noFoot : styles.footer} >
            Hi! I am Footer. Can you see my shoes.
        </div>
    )
}