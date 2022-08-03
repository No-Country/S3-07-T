
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllgames} from "../../redux/actions.js";
import GameCard from "../../components/card/gameCard.js";
import Pages from "../../components/getpages/pages.js";
import styled from "./home.module.css";
import { NotFound } from "../../components/notFound.js";


export function Home() {
    const dispatch = useDispatch();
    const estado= useSelector(state=> state);
    const videogames = useSelector((state) => state.filtergames);
    let esperandoF= useSelector((state) => state.esperandoFiltro);
    
    console.log(estado.allgames.length);

    const [currentPage, setCurrentPage] = useState(1)
    const [videogamesPerPage, setVideogmesPerPage] = useState(15)  
    const indexLastVideogames = currentPage * videogamesPerPage 
    const indexFirstVideogames = indexLastVideogames - videogamesPerPage

    const currentVideogames = videogames.length && videogames.slice(indexFirstVideogames, indexLastVideogames);

    function pagination(pageNumber) {
    setCurrentPage(pageNumber)
    }

    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
    !videogames.length && !esperandoF ?dispatch(getAllgames()): console.log("ya se cargaron los juegos");
        setLoading(false);
    },[videogames.length, dispatch]);


    while(!videogames.length) {
    return (
    <div className={styled.bg}>
        <NotFound/>
        
    </div> 
    )
}

    while (loading) {
    return (
        <div className={styled.loading}>
        <NotFound></NotFound>
        </div>
    )
}

    return (
        <div>
            <Pages
            videogamesPerPage={videogamesPerPage}
            videogames={videogames.length}
            pagination={pagination}
            />
        <div className={styled.cardframe} >
            {
            currentVideogames && currentVideogames.map(e => (
                <GameCard
                    name={e.name}
                    genres={e.genres.map(e => e.name)}
                img={e.background_image}
                rating={e.rating}
                id={e.id}
                createdDb={e.createdDb}
                key={e.id}
            />
            ))
            }
        </div>
    </div>
)
}