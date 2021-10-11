import React, { Component } from 'react'
import { connect } from 'react-redux'

class CantidadPokemon extends Component {
    render (){
        return(
            <React.Fragment>
                Cantidad:{this.props.Game_shop.pokemon}
            </React.Fragment>

        )
    }
}
const mapStateToProps = (state)=>{
    return{
        Game_shop: state.Game_shop
    }
}



export default connect (mapStateToProps)(CantidadPokemon)

