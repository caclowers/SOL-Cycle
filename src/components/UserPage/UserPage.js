import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import EditLocationModal from './EditLocationModal.js'
import axios from 'axios';
import SimpleModalLauncher from '../SimpleModalLauncher/SimpleModalLauncher';
// import States from '../States/States.js';
import moment from 'moment';
// import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
   user: state.user,
   userLocation: state.userLocation,
});

class UserPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         uvIndex: '',
         city: '',
         State: '',
         newCity: '',
         newState: '',
         lat: '',
         long: '',
      };
   };

   componentDidMount() {
      window.scrollTo(0, 0);

      this.props.dispatch({ type: 'FETCH_COORDINATES' });
      axios(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.props.userLocation.city},+${this.props.userLocation.state}&key=AIzaSyDnjD2cYoMBqVyqqe4BtBugAQRNiXn7OTY`)
         .then((response) => {
            this.setState({
               lat: response.data.results[0].geometry.location.lat,
               long: response.data.results[0].geometry.location.lng
            });
            console.log(this.state.lat);
            console.log(this.state.long);
         })
         .then(() => {
            axios(`https://api.darksky.net/forecast/cbbd7ef6d4a32d1afa75ace009b3393d/${this.state.lat},${this.state.long}`)
               .then((response) => {
                  console.log(response);
                  this.setState({
                     uvIndex: response.data.currently.uvIndex
                  });
                  console.log(this.state.uvIndex);
               })
         });
   };

   componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
         this.props.history.push('home');
      };
   };

   logout = () => {
      this.props.dispatch(triggerLogout());
      // this.props.history.push('home');
   };

   handleChangeFor = propertyName => (event) => {
      this.setState({
         // ...this.state,
         [propertyName]: event.target.value,
      })
   }

   submitEdit = (event) => {
      //send input data to state
      this.props.dispatch({
         type: 'SUBMIT_EDIT',
         payload: this.state
      });


      //refresh the component
   }

   submitDelete = (event) => {
      this.props.dispatch({
         type: 'FETCH_COORDINATES',
      })
   }

   render() {
      console.log(this.state);
      let content = null;

      let deleteLocationArray = this.props.userLocation.map((location, index) => {
         return (
         <option value={location.id}>{location.city},&nbsp;{location.state}</option>
         );
      })

      if (this.props.user.userName) {
         content = (
            <div className="bodyDiv">
               <main id="welcome">Hi,<br /> {this.props.user.userName}!</main>
               <div className="cardDiv">
                  <h1>UV Index</h1>
                  <h1 className="indexNumber">{this.state.uvIndex}</h1>
                  {/* <h3>{this.props.userLocation.city}, {this.props.userLocation.state} </h3> */}
                  <h2>{moment().format("dddd - MMMM Do, YYYY, h:mm a")}</h2>
                  <h1>Minneapolis, MN</h1>
                  {/* <button onClick={this.openEditLocationModal}>Add&nbsp;/&nbsp;Edit Location(s)</button> */}
                  <SimpleModalLauncher buttonLabel="Add / Edit Location(s)">
                     <form className="editModal" >
                        <div className="locationModal">
                           <h3>Add / Edit Location</h3>
                           <div>
                              <label htmlFor="city">
                                 City:
                                    <input onChange={this.handleChangeFor('newCity')} />
                              </label>
                           </div>
                           <div>
                              <label htmlFor="State">
                                 State:
                                    {/* <States onChange={this.handleChangeFor('newState')} /> */}
                                 <select type="select"
                                    name="State"
                                    // value={this.state.State}
                                    onChange={this.handleChangeFor('newState')}>
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
                              <input type="submit" value="submit" onSubmit={this.submitEdit} />
                           </div><br />
                           <div>
                              <label htmlFor="delete">
                                 Delete Location:<br />
                                 <select type="select" name="Locations">{deleteLocationArray}</select>
                              </label>
                              <div>
                                 <input type="submit" value="Delete" onSubmit={this.submitDelete} />
                              </div>
                           </div>
                        </div >
                     </form>
                  </SimpleModalLauncher>
                  <button >History Graph</button>
                  <button ><Link to="/info">What is UV?</Link></button>
                  <br />
                  <br />
                  <div>
                     <button onClick={this.logout}>Log Out</button>
                  </div>
               </div>
            </div>
         );
      };

      return (
         <div>
            {/* <Nav /> */}
            {content}
         </div>
      );
   };
};

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);




