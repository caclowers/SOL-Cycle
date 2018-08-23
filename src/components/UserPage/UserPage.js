import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import EditLocationModal from './EditLocationModal.js'
import axios from 'axios';
import SimpleModalLauncher from '../SimpleModalLauncher/SimpleModalLauncher';
// import States from '../States/States.js';
import moment from 'moment';
// import Nav from '../../components/Nav/Nav';
// import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';
// import * as V from 'victory';
// import { VictoryChart, VictoryTheme, VictoryLine, VictoryAxis, VictoryLabel } from 'victory';
import {
   XAxis, YAxis, CartesianGrid, Area, AreaChart, Tooltip,
   ResponsiveContainer
} from 'recharts';
import { LineChart, Line } from 'recharts';




const mapStateToProps = state => ({
   user: state.user,
   userLocations: state.userLocations,
   displayLocation: state.displayLocation,
   coordinateStore: state.coordinateStore,
   graphStore: state.graphStore
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
      console.log('**********', this.props.displayLocation.city);
      await this.props.dispatch({ type: 'FETCH_COORDINATES' });
      console.log('&&&&&&&&&&&', this.props.userLocations);
      axios(`https://api.darksky.net/forecast/cbbd7ef6d4a32d1afa75ace009b3393d/${this.props.coordinateStore.lat},${this.props.coordinateStore.lng}`)
         .then((response) => {
            console.log(response);
            this.setState({
               uvIndex: response.data.currently.uvIndex
            });
            console.log(this.state.uvIndex);
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
            console.log(response);
            this.setState({
               graphData: response.data.daily.data
            });
         })
   }


   handleChangeFor = propertyName => (event) => {
      this.setState({
         // ...this.state,
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
      console.log(this.props.userLocations.city);
      console.log(this.state.graphData);
      console.log('WMWMWMWMWM', this.props.coordinateStore);

      console.log('graphstore', this.props.graphStore);

      let content = null;

      let locationArray = this.props.userLocations.map((location, index) => {
         return (
            <option value={location.city}>{location.city[0].toUpperCase() + location.city.slice(1)},&nbsp;{location.state}</option>
         );
      })
      console.log(locationArray);

      let graphArrayData = this.state.graphData.map((graphItem, index) => {
         
         return (
            { index: moment.unix(graphItem.time).format("MMM D"), uvIndex: graphItem.uvIndex }
         )
      })
      console.log('graphDataArray', graphArrayData);

      // let locationDisplay = this.props.userLocations.map((location, index) => {
      //    return (
      //       <h1>{location.city[0].toUpperCase() + location.city.slice(1)},&nbsp;{location.state}</h1>
      //    );
      // })

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
                           <div>
                              <label htmlFor="delete">
                                 <h3>Change Current Location</h3>
                                 <select type="select" name="Locations" onChange={this.handleChangeFor('switchedLocation')}>{locationArray}</select>
                              </label>
                              <div>
                                 <input type="submit" value="Switch" onClick={this.submitEdit} />
                              </div>
                           </div>
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
                     <SimpleModalLauncher buttonLabel="6 Day Forecast" >
                        <div className="historyCard">
                           {/* <VictoryChart
                              theme={VictoryTheme.material}
                              maxDomain={{ y: 12 }}
                              minDomain={{ y: 0 }}
                           >
                              <VictoryLine
                                 style={{
                                    data: { stroke: "#c43a31" },
                                    parent: { border: "1px solid #ccc" }
                                 }}
                                 data={graphArrayData}
                                 x="index"
                                 y="uvIndex"
                              />
                              <VictoryAxis

                                 // tickValues specifies both the number of ticks and where
                                 // they are placed on the axis
                                 tickValues={[1, 2, 3, 4, 5, 6, 7, 8]}
                                 tickFormat={[
                                 moment().subtract(8, 'days').format("MMM Do"),
                                 moment().subtract(7, 'days').format("MMM Do"),
                                 moment().subtract(6, 'days').format("MMM Do"),
                                 moment().subtract(5, 'days').format("MMM Do"),
                                 moment().subtract(4, 'days').format("MMM Do"),
                                 moment().subtract(3, 'days').format("MMM Do"),
                                 moment().subtract(2, 'days').format("MMM Do"),
                                 moment().subtract(1, 'days').format("MMM Do"),
                                 moment().subtract(0, 'days').format("MMM Do")]}
                              />}
                              <VictoryAxis
                                 dependentAxis
                                 // tickFormat specifies how ticks should be displayed
                                 tickFormat={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]}
                              />
                           </VictoryChart> */}
                           <LineChart  width={700} height={500} data={graphArrayData}
                           margin={{ top: 45, right: 80, left: 20, bottom: 95 }}>
                              <CartesianGrid stroke="#052F5F" strokeWidth={5} strokeDasharray="8 8" />
                              <XAxis stroke="#FDCE38" label={{ fontSize: 36, stroke: "#FDCE38", value: 'DATE', offset: -40, position: 'insideBottom' }} dataKey="index" />
                              <YAxis stroke="#FDCE38" domain={[0, 12]} label={{ fontSize: 36, stroke: "#FDCE38",  value: 'UV INDEX', angle: -90, position: 'Left', dx: -30}} dataKey="uvIndex"/>
                              <Line type="monotone" dataKey="uvIndex" stroke="#FDCE38" />
                              <Tooltip />
                           </LineChart>
                        </div>
                     </SimpleModalLauncher>
                  </form>
                  {/* <button onClick={this.getHistory}>History Graph</button> */}
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




