import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <h2
               className="alert"
               role="alert"
            >
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
              <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                     />
                  </label>
               </div>
               <div>
                  <label htmlFor="password">
                     Password:
              <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                     />
                  </label>
               </div>
               <div>
                  <label htmlFor="password2">
                     Confirm:
              <input
                        type="password"
                        name="password"
                        value={this.state.password2}
                        onChange={this.handleInputChangeFor('password2')}
                     />
                  </label>
               </div>
               <div>
                  <label htmlFor="city">
                     City:
              <input
                        type="text"
                        name="City"
                        value={this.state.city}
                        onChange={this.handleInputChangeFor('city')}
                     />
                  </label>
               </div>
               <div>
                  <label htmlFor="State">
                     State:
                     <select type="select"
                        name="State"
                        value={this.state.State}
                        onChange={this.handleInputChangeFor('State')}>
                        <option value="Alabama">AL</option>
                        <option value="Alaska">AK</option>
                        <option value="Arizona">AZ</option>
                        <option value="Arkansas">AR</option>
                        <option value="California">CA</option>
                        <option value="Colorado">CO</option>
                        <option value="Connecticut">CT</option>
                        <option value="Delaware">DE</option>
                        <option value="District of Columbia">DC</option>
                        <option value="Florida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="Hawai'i">HI</option>
                        <option value="Idaho">ID</option>
                        <option value="Illinois">IL</option>
                        <option value="Indiana">IN</option>
                        <option value="Iowa">IA</option>
                        <option value="Kansas">KS</option>
                        <option value="Kentucky">KY</option>
                        <option value="Louisiana">LA</option>
                        <option value="Maine">ME</option>
                        <option value="Maryland">MD</option>
                        <option value="Massachussetts">MA</option>
                        <option value="Michigan">MI</option>
                        <option value="Minnesota">MN</option>
                        <option value="Mississippi">MS</option>
                        <option value="Missouri">MO</option>
                        <option value="Montana">MT</option>
                        <option value="Nebraska">NE</option>
                        <option value="Nevada">NV</option>
                        <option value="New Hampshire">NH</option>
                        <option value="New Jersey">NJ</option>
                        <option value="New Mexico">NM</option>
                        <option value="New York">NY</option>
                        <option value="North Carolina">NC</option>
                        <option value="North Dakota">ND</option>
                        <option value="Ohio">OH</option>
                        <option value="Oklahoma">OK</option>
                        <option value="Oregon">OR</option>
                        <option value="Pennsylvania">PA</option>
                        <option value="Rhode Island">RI</option>
                        <option value="South Carolina">SC</option>
                        <option value="South Dakota">SD</option>
                        <option value="Tennessee">TN</option>
                        <option value="Texas">TX</option>
                        <option value="Utah">UT</option>
                        <option value="Vermont">VT</option>
                        <option value="Virginia">VA</option>
                        <option value="Washington">WA</option>
                        <option value="West Virginia">WV</option>
                        <option value="Wisconsin">WI</option>
                        <option value="Wyoming">WY</option>
                        <option value="American Samoa">AS</option>
                        <option value="Guam">GU</option>
                        <option value="Northern Mariana Islands">MP</option>
                        <option value="Puerto Rico">PR</option>
                        <option value="U.S. Virgin Islands">VI</option>
                     </select>
                  </label>
               </div>
               <div>
                  <input
                     type="submit"
                     name="submit"
                     value="Register"
                  />
                  <Link to="/home">Cancel</Link>
               </div>
            </form>
         </div>
      );
   }
}

export default RegisterPage;


