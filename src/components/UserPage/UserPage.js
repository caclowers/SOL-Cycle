import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SimpleModalLauncher from '../SimpleModalLauncher/SimpleModalLauncher';
import moment from 'moment';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
import { XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { LineChart, Line } from 'recharts';



const mapStateToProps = state => ({
   user: state.user,
   userLocations: state.userLocations,
   displayLocation: state.displayLocation,
   coordinateStore: state.coordinateStore,
   graphStore: state.graphStore,
   switchedLocation: state.switchedLocation
});

class UserPage extends Component {
   constructor(props) {
      super(props);
      this.state = {
         
         userID: this.props.user.id,
         uvIndex: '',
         city: this.props.userLocations.city,
         State: this.props.userLocations.State,
         switchedLocation: '',
         newCity: '',
         newState: '',
         graphData: [],
         lat: '',
         long: '',
      };
   };


   async componentDidMount() {
      window.scrollTo(0, 0);

      await this.props.dispatch({ type: 'GET_DISPLAY_LOCATIONS' });
      // console.log('**********', this.state);
      await this.props.dispatch({ type: 'FETCH_COORDINATES' });
      // console.log('&&&&&&&&&&&', this.props.userLocations);
      axios(`https://api.darksky.net/forecast/cbbd7ef6d4a32d1afa75ace009b3393d/${this.props.coordinateStore.lat},${this.props.coordinateStore.lng}`)
         .then((response) => {
            console.log(response);
            this.setState({
               uvIndex: response.data.currently.uvIndex
            });
            // console.log(this.state.uvIndex);
         })

   };

   componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
         this.props.history.push('home');
      };
   };

   getHistory = (event) => {
      axios(`https://api.darksky.net/forecast/cbbd7ef6d4a32d1afa75ace009b3393d/${this.props.coordinateStore.lat},${this.props.coordinateStore.lng}`)
         .then((response) => {
            // console.log(response);
            this.setState({
               graphData: response.data.daily.data
            });
         })
   }

   handleLocationChangeFor = (property1, property2, property3) => (event) => {
      this.setState({
         ...this.state,
         [property1]: event.target.value.split(',')[0],
         [property2]: event.target.value.split(', ')[1],
         [property3]: event.target.value.split(', ')[2]
      })
   }

   handleChangeFor = propertyName => (event) => {
      this.setState({
         ...this.state,
         [propertyName]: event.target.value,
      })
   }

   logout = () => {
      this.props.dispatch(triggerLogout());
      // this.props.history.push('home');
   };


   submitDelete = (event) => {
      this.props.dispatch({
         type: 'SUBMIT_DELETE',
         payload: this.state.userID
      })
   }

   submitEdit = (event) => {
      //send input data to state

      this.props.dispatch({
         type: 'SUBMIT_EDIT',
         payload: this.state
      });
      // then refresh the component
   }

   submitNewLocation = (event) => {
      console.log('clicked');

      this.props.dispatch({
         type: 'SUBMIT_NEW_LOCATION',
         payload: this.state
      })
   }

   render() {
      // console.log(this.props.userLocations.city);
      // console.log(this.state.graphData);
      // console.log('WMWMWMWMWM', this.props.coordinateStore);

      // console.log('graphstore', this.props.graphStore);

      let content = null;

      let locationArray = this.props.userLocations.map((location, index) => {
         return (
            <option value={`${location.city}, ${location.state}`}>{location.city[0].toUpperCase() + location.city.slice(1)},&nbsp;{location.state}</option>
         );
      })
      // console.log(locationArray);

      let graphArrayData = this.state.graphData.map((graphItem, index) => {
         return (
            { index: moment.unix(graphItem.time).format("ddd MMM D"), uvIndex: graphItem.uvIndex }
         )
      })


      if (this.props.user.userName) {
         content = (
            <div className="bodyDiv">
               <main id="welcome">Hi,<br /> {this.props.user.userName}!</main>
               <div className="cardDiv">
                  <h1>UV Index</h1>
                  <h1 className="indexNumber">{this.state.uvIndex}</h1>
                  <h1>{this.props.displayLocation.city[0].toUpperCase() + this.props.displayLocation.city.slice(1)},&nbsp;{this.props.displayLocation.state}</h1>
                  <h2>{moment().format("dddd - MMMM Do, YYYY, h:mm a")}</h2>
                  <div className="buttonDiv">
                     <SimpleModalLauncher buttonLabel="Locations" >
                        <form className="form" >
                           <div className="locationModal">
                              <h3>Add A Location</h3>
                              <div>
                                 <label htmlFor="city">
                                    City:
                                    <input onChange={this.handleChangeFor('newCity')} />
                                 </label>
                              </div>
                              <div>
                                 <label htmlFor="State">
                                    State:
                                 <select type="select"
                                       name="State"
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
                                 <input type="submit" value="submit" onClick={this.submitNewLocation} />
                              </div>
                              <br />
                              

                              <div>
                                 <label htmlFor="delete">
                                    <h3>Change Current Location</h3>
                                    <select type="select" name="Locations" onChange={this.handleLocationChangeFor('city', 'state')}>{locationArray}</select>
                                 </label>
                                 <div>
                                    <input type="submit" value="Switch" onClick={this.submitEdit} />
                                 </div>
                              </div>
                              <br />
                              <div>
                                 <label htmlFor="delete">
                                    <h3>Delete A Location</h3>
                                    <select type="select" name="Locations">{locationArray}</select>
                                 </label>
                                 <div>
                                    <input type="submit" value="Delete" onClick={this.submitDelete} />
                                 </div>
                              </div>
                           
                           
                           </div >
                        </form>
                     </SimpleModalLauncher>
                     <form id="historyGraph" onClick={this.getHistory}>
                        <SimpleModalLauncher buttonLabel="7 Day Forecast" >
                           <div className="historyCard">
                              <LineChart width={900} height={500} data={graphArrayData}
                                 margin={{ top: 45, right: 80, left: 20, bottom: 95 }}>
                                 <CartesianGrid stroke="#052F5F" strokeWidth={5} strokeDasharray="8 8" />
                                 <XAxis stroke="#FDCE38" label={{ fontSize: 36, stroke: "#FDCE38", value: 'DATE', offset: -40, position: 'insideBottom' }} dataKey="index" />
                                 <YAxis stroke="#FDCE38" domain={[0, 12]} label={{ fontSize: 36, stroke: "#FDCE38", value: 'UV INDEX', angle: -90, position: 'Left', dx: -30 }} dataKey="uvIndex" />
                                 <Line type="monotone" dataKey="uvIndex" stroke="#FDCE38" strokeWidth={5} />
                                 <Tooltip />
                              </LineChart>
                           </div>
                        </SimpleModalLauncher>
                     </form>
                     <button ><Link to="/info">What is UV?</Link></button>
                  </div>
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




