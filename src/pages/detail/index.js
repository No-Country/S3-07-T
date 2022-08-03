import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import styled from './detail.module.css';

export  function Detail() {
    let { id } = useParams();
    const [detail, setDetail] = useState(false);

    useEffect(() => {
        console.log(id);
        fetch(`http://localhost:3001/videogame/${id}`)
            .then((res) => res.json())
            .then(setDetail);
    }, [id]);

    console.log("desde detail");
    console.log(detail);
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(detail.description, 'text/html')
    const description = htmlDoc.body.innerText
    return (<div className={styled.bg}>
        <div>
        Hola soy detail de: {detail.name || id}
        
        <h1 > {detail.name} </h1>

            <img  src={detail.background_image} alt=""  height="400px" />
            </div>
            <div className={styled.container}>
                <p>{id}</p>
            <h3>Fecha de Publicación:</h3>
            <p className={styled.p}> {detail.released} </p>
            <p >{description}</p>
            <h3 className={styled.h2}>Rating:</h3>
            <p className={styled.p}> {detail.rating} </p>
            <h3 className={styled.platforms} >Géneros:</h3>
            <p className={styled.platforms}> {detail.genres?detail.genres.map(el => (el.name+" ")): "" } </p>
            <h2 className={styled.platforms} >Plataformas:</h2>
            <p className={styled.platforms}> {detail.platforms?detail.platforms.map(el => (el.name+" ")): "" } </p>
            <div>
                <Link to="/home">
                    <button className={styled.btnBack}>Home</button>
                </Link>
            </div>
            </div>
        </div>)
}

// const { id } = useParams()

    // const dispatch = useDispatch()
    // const details = useSelector(state => state.detail)

    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     dispatch(getDetail(id))
    //         .then((response) => {
    //             setLoading(false);
    //         })
    //         .catch(error => console.log(error));
    // }, [dispatch,id])


    // if (loading) {
    //     return (
    //         <div>
    //             <Link to="/home">
    //                 <button className={styleDetail.btnBack}>Home</button>
    //             </Link>
    //             <div className={styleDetail.loading}>
    //             </div>

    //         </div>
    //     )
    // }

    

    // return (
    //     <div className={styleDetail.background}>
    //         <div className={styleDetail.border}>
    //             <h1 className={styleDetail.h1}> {details[0].name} </h1>
    //             <img className={styleDetail.img} src={details[0].background_image} alt="" width="500px" height="300px" />
    //             <p className={styleDetail.description}>{description}</p>
    //             <h2 className={styleDetail.h2}>Release Date:</h2>
    //             <p className={styleDetail.p}> {details[0].released} </p>
    //             <h2 className={styleDetail.h2}>Rating:</h2>
    //             <p className={styleDetail.p}> {details[0].rating} </p>
    //             <h2 className={styleDetail.platforms} >Platforms:</h2>
    //             <p className={styleDetail.pPlatforms}> {details[0].platforms.map(el => (el.name+" "))} </p>
    //         </div>
    //         <div>
    //             <Link to="/home">
    //                 <button className={styleDetail.btnclose}>Home</button>
    //             </Link>
    //             <Link to={`/detail/${Math.floor(Math.random() * 100000)}`}>
    //                 <button className={styleDetail.btnclose}>Random Game</button>
    //             </Link>
    //         </div>
    //     </div>
    // )