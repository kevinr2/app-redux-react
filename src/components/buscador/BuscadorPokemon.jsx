import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import FetchPokemon from '../../redux/actions/BuscadorAction'

const BuscadorPokemon = () => {

    const dispatch = useDispatch()
    const [pokemon , setPokemon] = useState([])
   
    const handleSubmit = (e) => {
        e.preventDefault();
      };
    return (
        <div className="form-group">
            <form className=""  onSubmit={handleSubmit}>
            <label htmlFor='buscar_pokemon' className="text-white"></label>
            <input type="text" id='buscar_pokemon' name="" value={pokemon} className="form-control"
                onChange={(event)=>
                    setPokemon(event.target.value)
                }
            />
            <button type="submit" className=" btn btn-primary mt-3"
            onClick={()=>
                dispatch(FetchPokemon(pokemon))
            }
            >buscar</button>
            </form>
        </div>
    )
}

export default BuscadorPokemon
