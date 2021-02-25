import React, { Component} from 'react';

export default class Details extends Component{

    constructor(props){
        super(props)
        this.state = {
            array : [],
        }
    }

    componentDidMount() {
        let array = JSON.parse(localStorage.getItem('film')) || []
        this.setState({
            array : array,
        })
      }

    render(){
        // const {items} = this.props
        const image = "https://image.tmdb.org/t/p/w500" + this.state.array.poster_path // récupération de l'image du film
        return(
            <div className="text-center colonne margin">      
                <div>
                    <div className="espace"></div>
                    <div>
                        <div className="container colonne">
                            <img src={image} alt=""/> {/* affichage de l'image */}
                        </div>
                    </div>

                    <div className="miniEspace"></div>
                        <div className="colonne flex center">
                            <h1 className="turquoise margin">{this.state.array.title}</h1> {/* affichage du titre */}
                            <h4 className="text-white margin">{this.state.array.overview}</h4> {/* affichage de la description */}
                            <h4 className="orange margin">Date de Sortie : {this.state.array.release_date}</h4> {/* affichage date de sortie */}
                        </div>
                    <div className="espace"></div>
                </div>      
            </div>
        )
    }
}