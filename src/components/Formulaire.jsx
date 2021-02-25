import React from 'react'
import { Formik, Form, Field} from 'formik'
import { apieMovie } from './../api/apiMovie';

export default class Formulaire extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            initialValues : {
                query : "",
                language : "",
            }
        }
    }

    getFormulaire(form){
        apieMovie.get("/search/movie",{
            params : {
                query : form.query,
                language : form.language,
            }
        }
        ).then(response => {
            this.props.test(response.data.results)
        })
    }

    render(){
        return(
        <div className="margin colonne">
                <Formik initialValues={this.state.initialValues} onSubmit={(form) => this.getFormulaire(form)}>
                    <Form className="colonne">
                    <div>
                        <div className="espace"></div>
                        <div className="text-white center font">Une recherche? </div>
                        <Field className='flexdouble' type='search' name='query' placeholder="Votre Recherche"/>
                        <div className="miniEspace"></div>
                        <Field as = "select" name="language">
                            <option value="fr">Francais</option>
                            <option value="en-US">Anglais</option>
                        </Field>
                        <div className="miniEspace"></div>
                        <button type="submit" className=" btn btn-warning">Rechercher</button>
                        <div className="espace"></div>
                    </div> 
                    </Form>
                </Formik>
            </div>
        )
    }
   }





