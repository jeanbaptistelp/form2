import React, { Component } from 'react';
import request from '../api/request';
import "./style/form.css"




export default class Form extends Component {


    state = {
        firstName : '', 
        lastName : '', 
        phoneNumber : '',
        birthdate : '',
        city : '',
        zipcode : ''
    }

    

    onSubmit = (e) => {


        e.preventDefault();

        console.log(this.state)

        request.post('/form', {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            phoneNumber : this.state.phoneNumber,
            birthdate : this.state.birthdate,
            city : this.state.city,
            zipcode : this.state.zipcode
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

    }


    render(){
        return(
            <div className="form-container">
                <aside>
                    <p>FORM</p>
                </aside>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="input-container">
                            <input className="form-field"
                                   type="text"
                                   name="firstName"
                                   onChange={ (e) => this.setState ({firstName : e.target.value}) }
                                   value={this.state.firstName}
                                   placeholder="firstname"
                                   autoFocus     
                            />
                    </div>

                    <div className="input-container">
                            <input className="form-field"
                                   type="text"
                                   name="lastName"
                                   onChange={ (e) => this.setState ({lastName : e.target.value.toUpperCase()}) }
                                   value={this.state.lastName}
                                   placeholder="lastName"     
                            />
                    </div>

                    <div className="input-container">
                            <input className="form-field"
                                   type="date"
                                   name="birthdate"
                                   onChange={ (e) => this.setState ({birthdate : e.target.value}) }
                                   value={this.state.birthdate}
                                   placeholder="birthdate"     
                            />
                    </div>

                    <div className="input-container">
                            <input className="form-field"
                                   type="number"
                                   name="phoneNumber"
                                   onChange={ (e) => this.setState ({phoneNumber : e.target.value}) }
                                   value={this.state.phoneNumer}
                                   placeholder="Phone Number"
                                   pattern=""     
                            />
                    </div>

                    <div className="input-container">
                            <input className="form-field"
                                   type="text"
                                   name="city"
                                   onChange={ (e) => this.setState ({city : e.target.value.toUpperCase()}) }
                                   value={this.state.city}
                                   placeholder="city"     
                            />
                    </div>

                    <div className="input-container">
                            <input className="form-field"
                                   type="number"
                                   name="zipcode"
                                   onChange={ (e) => this.setState ({zipcode : e.target.value}) }
                                   value={this.state.zipcode}
                                   placeholder="zipcode"
                                   maxLength="5"  
                                   size="5"   
                            />
                    </div>

                    


                    <input  className="btn-submit"
                            type="submit" value="ENVOYER"/>

                    
                </form>
            </div>
        )
    }
}