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
        const {items} = this.props
        const image = "https://image.tmdb.org/t/p/w500" + this.state.array.poster_path
        return(
            <div className="text-center colonne margin">
                <h1 className="text-white">{this.state.array.title}</h1>
                <div className="container colonne">
                    <img src={image} alt=""/>
                </div>
                <h4 className="text-white margin">{this.state.array.overview}</h4>
                <h4 className="text-white margin">Date de Sortie : {this.state.array.release_date}</h4>
            </div>

        )
    }
}