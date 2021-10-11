import {combineReducers} from 'redux'
import buscador from './BuscadorReducer';
import Game_shop from './GameshopReducer';

const RootReducers = combineReducers({
    Game_shop,
    buscador
});

export default RootReducers;