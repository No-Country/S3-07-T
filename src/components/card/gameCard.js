
import React from "react";
import styled from "./gameCard.module.css";
import { Link, useNavigate } from "react-router-dom";

import { NotFound } from "../notFound.js";
const alterIMG="https://static1-es.millenium.gg/articles/6/37/47/6/@/175599-sin-titulo-1-article_m-2.png";

export default function GameCard({ name, genres, rating, id, createdDb, img =alterIMG  }){

    let navigate= useNavigate();
    
    

    let handleClick= (e)=>{
        e.preventDefault();
        navigate(`/detail/${id}`);
    }
    
    while(!name || !img  || !name || !id){
        return (<NotFound/>)
    }
    return( 
        
        <div key={id||""} className={styled.carta} onClick={(e)=>handleClick(e)} >
            <Link to={`/detail/${id}`} >
            <h3> {name || ""}</h3> <br/>
                <p>{id}</p>
                <img className={styled.img} src={img||alterIMG}  alt={`imagen ${name}`} width="100%" /> <br/>
                <p>{genres.map(e => e + " / ")}</p>
                <p>{}</p>
                <p>{rating}</p>
            </Link>
        </div>
        
    )
}