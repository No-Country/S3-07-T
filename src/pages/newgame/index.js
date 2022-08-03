import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadGenres, loadCateg } from "../../redux/actions.js";
import styled from "./newgame.module.css";
import "./errors.css";
import { postGame } from "../../redux/actions.js";


const NewGame = () => {
    const datosInit={
        name: "",
        rating: "",
        description: "",
        date: "",
        genres: [],
        platforms:[],
    }
    let allgenres= useSelector(state=>state.genres);
    let platforms= useSelector(state=>state.platforms);
    const [datos, setDatos]= useState(datosInit);
    const [error, setError]= useState({});
    
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(loadGenres());
        dispatch(loadCateg());
    },[dispatch]);
    
    console.log(datos);

    const handleChange= (e)=>{
        e.preventDefault();
        setDatos({...datos,
            [e.target.name]:e.target.value
        });
    }
    const handleClick=(e) =>{ 
        if(e.target.name=== "genres" || e.target.name==="platforms"){
            setDatos(
                {...datos, [e.target.name]:[...datos[e.target.name], e.target.value] }
                );
        }
        else{
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        });
        let neweror= verificar({...datos, [e.target.name]: e.target.value, });
        console.log("newerror");
        console.log(neweror);
        setError(neweror);
    }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("llegó al submit");
        console.log(e.target);
        const pasa=verificar(datos,true, error);
        if(pasa){postGame({
            ...datos
        });
        console.log(datos.id);
        setDatos(datosInit);
        }
        if(!pasa){
            alert("Para agregar un juego completa los campos");
        }
    };
    

    return (
        <div className={styled.ctn} > 
        
            <form className={styled.form}>
            <label >Nombre del Juego</label>
                    <input
                    type="text"
                    name="name"
                    placeholder="Nombre del Juego"
                    value={datos.name}
                    onChange={handleChange}
                    className={error.name?"darger": ""}
                /> 
                    <label >Fecha publicación:</label>
                    <input onChange={handleChange} type='text' name='date' value={datos.value} 
                        placeholder=' YYYY-MM-DD'/>
                    <textarea onChange={handleChange} type='text' name='description'  placeholder="Descrición:"//value={input.description} 
                    />
                    <label>Rating:</label>
                    <input onChange={handleChange} type='text' name='rating' //value={} 
                        placeholder='2.1'/>
                    <label>Género:</label>
                    <select  name="genres" onChange={(e)=>handleClick(e)} >
                        <option value="default" key="default">--selec género--</option>
                        {  
                            allgenres.map(el => {
                            return (<option value={el.name} key={el.id}  name="genres" >{el.name}</option>)
                        })} 
                    </select>
                    <label>Plataformas:</label>
                    <select   name="platforms"  onChange={(e)=>handleClick(e)}>
                        <option value="default" key="default"  >--selec--</option>
                        {  
                            platforms.map(el => {
                            return (<option value={el} key={el}  name="platforms" >{el}</option>)
                        })} 
                    </select>
                <button onClick={(e)=>handleSubmit(e)} > Cargar juego </button>
                <span><Link to='/home'><button className="algo"> Home</button></Link> </span>
            </form>
            <>{datos.genres}</>
            <div>{datos.platforms}</div>
        </div>
    )
}

export default NewGame;


function verificar(datos, submit=false, error){  
    var errors= {};
    if(submit){
    console.log("llegó al case submit en verificar");
    if (datos.nombre=== "") {console.log(`nombre = "" complete`); return false}  
    if (!datos.rating || datos.dificultad==="") {console.log(`dificultad = ""`); return false}
    if (datos.description=== "" ) {console.log(`description = ""`); return false}
    if (datos.date==="" || datos.date==="e") {console.log(`date = ""`); return false}
    if (!datos.genres[0]) {console.log(`genres = []`); return false}
    if (!datos.platforms[0]) {console.log(`platforms = []`); return false}
    if (error.values){ console.log("llegó a error values")}
    
    let values = Object.values(error);
    console.log(values);
    if(values[0]) { return false }
    if (!values.length || values.length<1) return true; 
    }
    
    
    for (let key in datos) {
        if(!datos[key] || datos[key]==="") {errors[key]=`El campo ${key} es requerido`; console.log(`El campo ${key} es requerido`);  }
        console.log(`${key}: ${datos[key]}`);
    }
    if(datos.rating!== ""){
    if( datos.rating - Math.trunc(datos.rating) !== 0){errors.rating="solo se aceptan números"}
    if(datos.rating<1 || datos.duracion>24) {errors.duracion="se aceptan valores entre 1 y 24"}
    }
    return errors;
}


