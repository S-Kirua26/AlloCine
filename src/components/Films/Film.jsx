import React, { Component } from 'react';
// import Favorie from '../Favorie';

export default class Film extends Component{

    constructor(props){
        super(props);
        this.state = {
            storage : []
        }
    }

    componentDidMount(){
        let array = JSON.parse(localStorage.getItem('films')) || []
        this.setState({
            storage : array,
        })
    }

    ajoutFavorie = (items) =>{ // fonction qui permet d'ajouter un film en favorie
        this.props.cliqueAdd(items)
        let array = JSON.parse(localStorage.getItem('films')) || [] 
        this.setState({ // met à jour le state qui se trouve dans le controller
            storage : array,
        })
        // state passe par le controller qui déclenche le render qui lui met à jour le bouton
    }

    supFavorie = (id) => { // fonction qui permet de supprimer un film en favorie
        let supprime = JSON.parse(localStorage.getItem('films')) || [] // permet de lire ce qui se trouve dans le local Storage
        const newArray = supprime.filter(word => word.id !== id) // permet de vérifier si l'id du film est différent de l'id passé en paramétres
        console.log(newArray)
        localStorage.setItem('films', JSON.stringify(newArray)) // permet d'écrire dans le local Storage
        this.setState({ // met à jour le state qui se trouve dans le controller
            storage : newArray,
        })
        this.props.cliqueRemove(newArray)
    }

    cliqueImage = (items) => { 
        // quand on clique sur l'image, on enregistre les informations liées au film dans le local storage
        // pour ensuite les récupérer dans le fichiers "Details"
        // const {items} = this.props
        localStorage.setItem('film', JSON.stringify(items)) // on enregistre les informations dans le local storage
        this.props.history.push("/details") // permet la redirection vers la page "Details"
    }


    render(){
        const {items} = this.props
        const urlImage = "https://image.tmdb.org/t/p/w500" + items.poster_path
        return(
            <React.Fragment>
                <div className="espace"></div>
                <div className="card col-2 m-1 d-black mt-5 shadow-lg p-J mb-5 bg-body rounded transform gris">
                    <div className="espace"></div>
                    <div className="colonne center marginLeft">
                        <div className="curseur">
                            <img src={urlImage} className="img-fluid" onClick={() => {this.cliqueImage(items)}}></img>
                        </div>
                        <div className="margin">
                            <h3>{items.title}</h3>
                        </div>
                        {
                            this.state.storage.find(element => element.id == items.id)? 
                            // si l'index de l'objet correspond à la "key" de notre film on affiche le bouton remove sinon on affiche le bouton add
                            <div>
                                <button  className="btn btn-warning margin" onClick={() => this.supFavorie(items.id)}>Remove</button>
                            </div>
                            :
                            <div className="center">
                                <button  className="btn btn-primary margin" onClick={() => this.ajoutFavorie(items)}>Add</button>
                            </div>
                        }
                    </div>
                </div>
                <div className="espace"></div>
            </React.Fragment>
        )       
    }
        
    }