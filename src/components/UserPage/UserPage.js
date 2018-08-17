import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import EditLocationModal from './EditLocationModal.js'
import axios from 'axios';
import SimpleModalLauncher from '../SimpleModalLauncher/SimpleModalLauncher';
import States from '../States/States.js';
import moment from 'moment';
// import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
   user: state.user,
   newState: state.State,
   userLocation: state.userLocation,
});

class UserPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         uvIndex: '',
         city: this.props.city,
         State: this.props.State,
         newState: '',
         lat: '',
         long: '',
      };
   };

   componentDidMount() {
      window.scrollTo(0, 0);

      this.props.dispatch({ type: 'FETCH_COORDINATES' });
      axios(`https://maps.googleapis.com/maps/api/geocode/json?address=chicago,+il&key=AIzaSyDnjD2cYoMBqVyqqe4BtBugAQRNiXn7OTY`)
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
      })

      //refresh the component
   }

   submitDelete = (event) => {
      this.props.dispatch({
         type: 'SUBMIT_DELETE',
         payload: this.state.ijn
      })
   }

   render() {
      console.log(this.state);
      let content = null;

      if (this.props.user.userName) {
         content = (
            <div className="bodyDiv">
               <main id="welcome">Hi,<br /> {this.props.user.userName}!</main>
               <div className="cardDiv">
                  <h1>UV Index</h1>
                  <h1 className="indexNumber">{this.state.uvIndex}</h1>
                  {/* <h3>{this.props.userLocation.city}, {this.props.userLocation.state} </h3> */}
                  <h2>{moment().format("dddd - MMMM Do, YYYY")}</h2>
                  <h1>Minneapolis, MN</h1>
                  {/* <button onClick={this.openEditLocationModal}>Add&nbsp;/&nbsp;Edit Location(s)</button> */}
                  <SimpleModalLauncher buttonLabel="Add / Edit Location(s)">
                     <form className="editModal" >
                        <div className="locationModal">
                           <h3>Add / Edit Location</h3>
                           <div>
                              <label htmlFor="city">
                                 City:
                                    <input onChange={this.handleChangeFor('city')} />
                              </label>
                           </div>
                           <div>
                              <label htmlFor="State">
                                 State:
                                    <States onChange={this.handleChangeFor('State')} />
                              </label>
                           </div>
                           <div>
                              <input type="submit" value="submit" onSubmit={this.submitEdit} />
                           </div><br />
                           <div>
                              <label htmlFor="delete">
                                 Delete Location:<br />
                                 <select type="select" name="Locations"><option value="howdy">Howdy</option></select>
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




