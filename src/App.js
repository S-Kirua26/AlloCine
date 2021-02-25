// insertion de fichiers et de bibliothéques
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './components/NavBar';
import Accueil from './components/Accueil';
import Favorie from './components/Favorie';
import Error from './components/Error';
import './App.css';
import Details from './components/Details';

const history = createBrowserHistory();
class App extends React.Component {

  render(){
    return(

      // permet d'écrire plusieurs div dans le même return
      <React.Fragment> 
        <div className="colonne">
          <div className="colonne">
            <BrowserRouter>
            {/* Apelle à la classe NavBar (fichier NavBar.jsx) */}
              <NavBar/>
              {/* Permet d'identifier les redirections (message d'erreur si route inconnu) */}
              <Switch history={history}>
                <Route exact path='/' component={Accueil}/>
                <Route path='/favorie' component={Favorie}/>
                <Route path='/details' component={Details}/>
                <Route component={Error}/>
              </Switch>  
            </BrowserRouter>
          </div>
        </div>
      </React.Fragment>     
    )
    
}
  
}
export default App;
