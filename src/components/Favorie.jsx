import React, { Component} from 'react';
import Film from './Films/Film';

export default class Favorie extends Component{

    constructor(props){
        super(props)
        this.state = {
            array : [],
        }
    }

    cliqueAdd = (items) => { // permet d'ajouter un ou plusieurs films en favorie
        let array = JSON.parse(localStorage.getItem('films')) || []
        array.push(items)
        localStorage.setItem('films', JSON.stringify(array)) // on enregistre les informations dans le local storage
        this.setState({ // met à jour le state dans le controller 
            array : array,
        })
        
    }

    cliqueRemove = (newArray) => { // permet de retirer un ou plusieurs films des favories
        this.setState({
            array : newArray,
        })

    }

    componentDidMount() {
        let array = JSON.parse(localStorage.getItem('films')) || []
        this.setState({
            array : array,
        })
      }

    render(){
        const {items} = this.props
        return(
            <React.Fragment>
                <div className="text-center colonne margin">
                    <h1 className="text-white">Favorie</h1>
                </div>
                <div>
                    {
                        this.state.array.map((items)=> {
                            return(
                                <Film key = {items.id} items={items} cliqueRemove={this.cliqueRemove}/> // passe en props les informations dont on à besoin
                            )
                        })
                    }
                </div>
            </React.Fragment>
        )
    }
}