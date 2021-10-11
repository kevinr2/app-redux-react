import React from 'react'
import { useSelector } from 'react-redux'

const Cantidad = () => {

    const Game_shop =  useSelector(state => state.Game_shop) 

    return (
    <React.Fragment>
        Cantidad:{Game_shop.pokemon}
    </React.Fragment>
    )
}

export default Cantidad
