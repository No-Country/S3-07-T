import axios from "axios";
import {   GET_GAMES, GET_GAME_BY_ID, GET_GAME_BY_NAME, GET_GENRES ,GET_PLAT,URL_BASE  } from "./constantes";



export const loadGenres = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`${URL_BASE}/genres`);
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_GENRES,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const getAllgames = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`http://localhost:3001/videogames`);
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_GAMES,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const getById = (id) =>{
    console.log(GET_GAME_BY_ID+": "+id);
    return async (dispatch) => {
        try {
            const api = {data:GET_GAME_BY_ID}
            const res= api.data;
            console.log("desde actions:");
            return dispatch({
                type: GET_GAME_BY_ID ,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
}


export const getByNames = (name) => {
    return async (dispatch) => {
        try {
            const api = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            const res= api.data;
            console.log(res);
            
            return dispatch({
                type: GET_GAME_BY_NAME,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export const loadCateg = () => {
    return async (dispatch) => {
        
        console.log("desde actions: PLAT");
    
        return dispatch({
            type: GET_PLAT,
        
        })
        
    }
};

export function postGame(objGame){
    return async (dispatch) => {
        try {
            const api = await axios.post(`localhost:3001/videogame`, objGame);
            const res= api.data;
            console.log(api);
            console.log("desde post games")
            console.log(res);
            return dispatch({
                type: "POST_GAME",
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
    
}
