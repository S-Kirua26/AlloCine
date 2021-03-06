import React, { Component } from 'react';
import Film from './Films/Film';
import { apieMovie } from '../api/apiMovie';
import Formulaire from './Formulaire';
import Pagination from "react-js-pagination";

export default class Accueil extends Component{

    constructor(props){
        super(props);
        this.state = ({
            array : [],
            bool : true,
            activePage : 1,
        })
        console.log(this.state.array)
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
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

    recherche = (arraySearch) => {
        this.setState({
            values : arraySearch,
            bool : false  
        })
        console.log(this.state.array)
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
                    <Formulaire recherche={this.recherche}/>
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
                <div className="center">
                    <Pagination activePage={this.state.activePage} itemsCountPerPage={20} totalItemsCount={450} pageRangeDisplayed={5} onChange={this.handlePageChange.bind(this)}/>
                </div>
            </React.Fragment>
        )
    }
}