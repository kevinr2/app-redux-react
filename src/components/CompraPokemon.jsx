import React, { Component } from 'react'
import {connect} from 'react-redux'

import {buy_pokemon_action,return_pokemon_action } from '../redux/actions/GameshopAction'

class CompraPokemon extends Component{
    render(){
    return (
       <div>
           <button className='btn btn-dark btn-sm mb-2' onClick={ () =>
                 this.props.buy_pokemon_action(1)
                }> Compra pokemon</button>
           <button className='btn btn-dark btn-sm' onClick={()=>
               this.props.return_pokemon_action(1)
           }> Regresar pokemon</button>
   
           
       </div>
    
    )
}
}

const mapDispathToProps ={
    buy_pokemon_action,
    return_pokemon_action
};


export default connect(null, mapDispathToProps)(CompraPokemon)


