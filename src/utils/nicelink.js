import styled from "./nicelink.module.css";
import { NavLink } from "react-router-dom";

export const useNiceLink=()=>{
    return (
    <NavLink className={styled.link1}>
    </NavLink>
    )
}
export const StiledLink=styled(NavLink)`
display: inline-block;
margin-top:4px;
padding:0.6em;
paddin-right:1em;
color:#fff;
border-radius:30%;
box-shadow:
            inset 0 -3em 3em rgba(240, 216, 178,0.7),
                0 0  0 2px rgb(255,255,255),
                0.3em 0.3em 1em rgba(0,0,0,0.4);
`;

export const CardLink=styled(NavLink)`
color:#fff;
&:hover{
    transition: 0.2s;
    color: #00242a;
    
}
`;