import React from "react";
import { useRef } from "react";
import styled from "./search.module.css";
import {useDispatch} from "react-redux";
import { getByNames } from "../../redux/actions";


export default function SearchBar(){
    
    const dispatch = useDispatch();
    const inputRef= useRef();

    const handleChange= (e)=>{

        console.log(e.target.value);
    }

    const handleClick = (e) =>{
        e.preventDefault();
        const input=inputRef.current;
        console.log(input);
        console.log("valor "+input.value);
        dispatch(getByNames(input.value));
        input.value="";
    }
    
    
    return( 
        <div>
            <form action="" className={styled.form}>
                <input className={styled.input} type="text" ref={inputRef}  onChange={(e)=>handleChange(e)}   />   <button onClick={(e)=>handleClick(e)}>🔍</button>
            </form>
        </div>
    )
}