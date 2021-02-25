import React, { Component} from 'react';

export default class Error extends Component{
    
    render(){
        return(
            <div className="d-flex-justify-content-center">
                <h1 className="text-danger">Une erreur s'est produite. Erreur 404</h1>
            </div>
        )

        // enregistrerDonnées = (items) =>{
    //     let array = JSON.parse(localStorage.getItem('films')) || []
    //     array.push(items)
    //     localStorage.setItem('films', JSON.stringify(array))
    //     this.setState({
    //         array : array,
    //         bool : false,
    //     })
    // }
    }
}