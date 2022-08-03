import GameCard from "../card/gameCard";
import styled from "./cards.module.css";
import { useEffect, useState } from "react";
import Paginado from "../paginado/paginado.js";
import { NotFound } from "../notFound";

export default function Cards({games, nro}){
    const gamesArr= games;
    const [currentPage, setCurrentPage]= useState(1);
    const [gamesPorPag, setGamesPorPag]= useState(15);  //15
    const [segmento, setSegmento]= useState(1);

    const indexOfLast = currentPage * gamesPorPag;  
    const indexOfFirst = indexOfLast - (gamesPorPag);
    let gamesShow=[]; 
        
    gamesShow= gamesArr && gamesArr.slice((indexOfFirst-1),(indexOfLast-1));
    
    
    
    // const variacion= (currentPage)=>{
    //     let cantidad=10;
    //     if (currentPage===1){
    //         cantidad=9;
    //     }
    //     setPaisesPorPag(cantidad);
    // }

    const paginado = (pageNumber)=> {
        setCurrentPage(pageNumber);
    }
    const segmentar = (segmento)=> {
        setSegmento(segmento);
    }
    
    

    


    console.log(gamesArr[0].name);


    if(gamesArr.length<1 || !games.length){
        return (
            <NotFound/>
        )
    }

    return( <div>
        <Paginado gamesPorPag={gamesPorPag} gamesLength={gamesArr&& gamesArr.length} segmento={segmento} paginado={paginado} segmentar={segmentar} currentPage={currentPage}  />
        <div className={styled.container} key={nro}>
            
            { gamesShow.map(el=> {
                return (
                    <GameCard
                    name={el.name}
                    genres={el.genres.map(e => e.name)}
                    img={el.background_image}
                    rating={el.rating}
                    id={el.id}
                    createdDb={el.createdDb}
                    key={el.id}
                    />
                    )
            } )  }
        </div>
    </div>
    )
}