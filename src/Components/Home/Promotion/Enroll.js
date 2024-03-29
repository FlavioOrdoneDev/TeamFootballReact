import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../Ui/formFields';

class Enroll extends Component {

    state = {
        formError: false,
        formSuccess: '',
        formData: {
            email: {
                element:'input',
                value:'',
                config:{
                    name:'email_input',
                    type:'email',
                    placeholder: 'Entre com seu email'
                },
                validation:{
                    required: true,
                    email:true
                },
                valid:false,
                validationMessage:''
            }
        }
    }

    submitForm() {

    }

    render() {
        return (
            <Fade>
                <div className="enroll_wrapper">
                    <form onSubmit={ (event)=> this.submitForm(event)}>
                        <div className="enroll_title">
                            Entre com seu email
                        </div>
                        <div className="enroll_input">
                            <FormField
                                id = {'email'}
                                formData = {this.state.formData.email}
                            />
                        </div>

                    </form>
                </div>
            </Fade>
        )

    }
}
     
export default Enroll;