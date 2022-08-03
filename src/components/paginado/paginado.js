import React from "react";
import styled from "./paginado.module.css";

import { useState } from "react";

export default function Paginado ({gamesPorPag, gamesLength, paginado, segmento, segmentar, currentPage, actualizar }) {
    let [Pag, setPag]= useState(1);  

    const handleClick= (e)=>{
        e.target.style="box-shadow: 2px 2px  rgba(235, 239, 240, 0.911);"
        setPag(e.target.name);
    }

    const PageNumbers = [];
    const limit=Math.floor(gamesLength/gamesPorPag);
    for (let i=0; i< limit ; i++){
        PageNumbers.push(i+1);
    }
    return(
        <nav >
            <ul >
            <button onClick={()=> segmentar(segmento>1 && segmento-1)} className={segmento===1?"hidden":"visible"} >⏮️</button>
                {PageNumbers?.map(num=>(segmento*5>=num && 5*segmento-5<num?
                    <li key={num} className={styled.numero} >
                    <a onClick={(e)=> {
                        paginado(num);
                        handleClick(e);
                        console.log(e.target.style="box-shadow: 2px 2px  rgba(235, 239, 240, 0.911);");        
                }} name={num} >{num<10?"0"+num : num}</a> 
                    </li>
                    : ""
                ))}
                <button onClick={()=> segmentar(segmento<5 && segmento+1)}  className={segmento===5?"hidden":"visible"} >⏭️</button>
            </ul>
        </nav>
    )
}