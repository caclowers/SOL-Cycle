import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import States from '../States/States.js';

class RegisterPage extends Component {
   constructor(props) {
      super(props);

      this.state = {
         username: '',
         password: '',
         password2: '',
         city: '',
         State: '',
         message: '',
      };
   }

   registerUser = (event) => {
      event.preventDefault();

      if (this.state.username === '' || this.state.password === '') {
         this.setState({
            message: 'Choose a username and password!',
         });
      } else {
         const body = {
            username: this.state.username,
            password: this.state.password,
            city: this.state.city,
            State: this.state.State,
         };

         // making the request to the server to post the new user's registration
         axios.post('/api/user/register/', body)
            .then((response) => {
               if (response.status === 201) {
                  this.props.history.push('/home');
               } else {
                  this.setState({
                     message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
                  });
               }
            })
            .catch(() => {
               this.setState({
                  message: 'Ooops! Something went wrong! Is the server running?',
               });
            });
      }
   } // end registerUser

   handleInputChangeFor = propertyName => (event) => {
      this.setState({
         [propertyName]: event.target.value,
      });
   }

   renderAlert() {
      if (this.state.message !== '') {
         return (
            <h2 className="alert" role="alert">
               {this.state.message}
            </h2>
         );
      }
      return (<span />);
   }

   render() {
      return (
         <div className="formDiv">
            {this.renderAlert()}
            <form onSubmit={this.registerUser}>
               <h1>Register User</h1>
               <div>
                  <label htmlFor="username">
                     Username: 
                     <input type="text" onChange={this.handleInputChangeFor('username')}/>
                  </label>
               </div>
               <div>
                  <label htmlFor="password">
                     Password:
                     <input type="password" name="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} />
                  </label>
               </div>
               <div>
                  <label htmlFor="password2">
                     Confirm:
                     <input type="password" name="password" value={this.state.password2} onChange={this.handleInputChangeFor('password2')}/>
                  </label>
               </div>
               <div>
                  <label htmlFor="city">
                     City:
                     <input type="text" name="City" value={this.state.city} onChange={this.handleInputChangeFor('city')}/>
                  </label>
               </div>
               <div>
                  <label htmlFor="State">
                     State:
                     <States />
                  </label>
               </div>
               <div>
                  <input type="submit" name="submit" value="Register"/>
                  <Link to="/home">Cancel</Link>
               </div>
            </form>
         </div>
      );
   }
}

export default RegisterPage;