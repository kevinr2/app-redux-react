
import './App.css';
//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
//img
import imagen from './img/pokemon.jpg';
import Store from './redux/Store';
import {Provider} from 'react-redux'
import Compras from './components/Compras.hook';
import Cantidad from './components/Cantidad.hook';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';


function App() {

  return (
    <Provider store={Store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{maxWidth:'370px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={imagen} alt="pokemon" className="card-img"/>
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-tile h3 text-center">
                      <Cantidad/>
                    </div>
                      <Compras/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon/>
          </div>
          <div className='col-12'>
            <ResultadoPokemon/>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
