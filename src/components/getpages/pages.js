import React from 'react'
import style from "./pages.module.css";
import SearchBar from '../navbar/SearchBar';

export default function Pages({ videogamesPerPage, videogames, pagination }) {
    const pageNumbers = []
    for (let i = 0; i < Math.ceil(videogames / videogamesPerPage); i++) {
        pageNumbers.push(i + 1)
    }

    return (
        <div className={style.bg}> 
        <div className={style.paginado}>
            {
                pageNumbers && pageNumbers.map(e => (
                    <div key={e} className={style.number} onClick={() => pagination(e)}>{e}</div>
                ))
            }
            </div>
            <SearchBar/>
        </div>
    )
}