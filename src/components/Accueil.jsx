import React, { Component } from 'react';
import Film from './Films/Film';
import { apieMovie } from '../api/apiMovie';
import Formulaire from './Formulaire';

export default class Accueil extends Component{

    state = {
        bool : true
    }

    cliqueAdd = (items) => { // permet d'ajouter un ou plusieurs films en favorie
        let array = JSON.parse(localStorage.getItem('films')) || []
        array.push(items)
        localStorage.setItem('films', JSON.stringify(array)) // on enregistre les informations dans le local storage
        this.setState({ // met à jour le state dans le controller 
            array : array,
            bool : false,
            storage : array,
        })
        
    }

    cliqueRemove = () => { // permet de retirer un ou plusieurs films des favories
        var storage = JSON.parse(localStorage.getItem('films'))
        this.setState({
            storage : storage,
        })
    }

    componentDidMount(){
        apieMovie.get("discover/movie")
        .then (response => {
          this.setState({
            values : response.data.results,
            bool : false
            })
        })
        .catch((error) => {
          console.log(error)
        });
      }

    render(){

    if(this.state.bool) 
    {
        return <h1>Loading...</h1>
    }

        return(
            <React.Fragment>
                <div>
                    <Formulaire/>
                </div>
                <div className="text-center colonne margin">
                    <h1 className="text-white">Accueil</h1>
                </div>
                <div>
                    <div className="row d flex justify-content">
                        {
                            this.state.values.map((items)=> {
                                return(
                                    <Film key = {items.id} items={items} history={this.props.history} cliqueAdd={this.cliqueAdd} cliqueRemove={this.cliqueRemove}/>
                                    // passe en props les informations dont on à besoin 
                                )
                            })
                        }
                    </div>
                </div> 
            </React.Fragment>
        )
    }
}