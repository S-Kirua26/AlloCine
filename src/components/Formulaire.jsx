import React from 'react'
import { Formik, Form, Field} from 'formik'

export default class Formulaire extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            InitialValues : {
                query : "",
                language : "",
            }
        }
    }

    render(){
        return(
        <div className="margin colonne">
                <Formik initialValues={this.state.initialValues}>
                    <Form className="colonne">
                    <div>
                        <div className="espace"></div>
                        <div className="text-white center font">Une recherche? </div>
                        <Field className='flexdouble' type='search' name='query' value='' placeholder="Votre Recherche"/>
                        <div className="miniEspace"></div>
                        <Field as = "select">
                            <option values="fr">Francais</option>
                            <option values="en-US">Anglais</option>
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





