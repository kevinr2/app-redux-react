import axios from 'axios';
export const FETCH_POKEMON_REQUEST ='FETCH_POKEMON_REQUEST'
export const FETCH_POKEMON_SUCCESS ='FETCH_POKEMON_SUCCESS'
export const FETCH_POKEMON_FAILURE ='FETCH_POKEMON_FAILURE'

export const fetchPokemonRequest = ()=>{
    return{
        type:FETCH_POKEMON_REQUEST
    }
}
export const fetchPokemonSuccess = (pokemon)=>{
    return{
        type:FETCH_POKEMON_SUCCESS,
        payload:pokemon
    }
}
export const fetchPokemonFailure = (error)=>{
    return{
        type:FETCH_POKEMON_FAILURE,
        payload:error
    }
}

const FetchPokemon = (valor)=>{
    return(dispatch)=>{
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
        .then(response=>{
            dispatch(fetchPokemonSuccess([response.data]));
        })
        .catch(error =>{
            dispatch(fetchPokemonFailure('No se encontro el pokemon'))
        })
    }
}
export default FetchPokemon;
