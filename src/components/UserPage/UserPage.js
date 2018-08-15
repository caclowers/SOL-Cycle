import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import EditLocationModal from './EditLocationModal.js'
import axios from 'axios';

// import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
   user: state.user,
   city: state.city,
   isModalOpen: false
});

class UserPage extends Component {
   constructor(props){
      super(props);
      this.state = {
         uvIndex: ''
      }
   }
      
   componentDidMount() {
      this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
   }

   componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
         this.props.history.push('home');
      }
   }

   logout = () => {
      this.props.dispatch(triggerLogout());
      // this.props.history.push('home');
   }

   openEditLocationModal() {
      this.setState({ isModalOpen: true })
    }
  
    closeEditLocationModal() {
      this.setState({ isModalOpen: false })
    }

    getUVIndex = () => {
      axios('https://api.darksky.net/forecast/cbbd7ef6d4a32d1afa75ace009b3393d/44.94191854268716,-93.38420208025178').then((response) => {
         // axios('https://maps.googleapis.com/maps/api/geocode/json?address=boseman,+MT&key=AIzaSyDnjD2cYoMBqVyqqe4BtBugAQRNiXn7OTY').then((response) => { 
      console.log(response);
         this.setState({
            uvIndex: response.data.currently.uvIndex
            // uvIndex: response.data.results[0].geometry.location.lng
      })
         console.log(this.state.uvIndex);
         
      })
    }

   render() {
      let content = null;


      if (this.props.user.userName) {
         content = (
            <div className="bodyDiv">
            <main id="welcome">Hi,<br/> {this.props.user.userName}!</main>
               <div className="cardDiv">
                  
                  <h1>UV Index</h1>
                  <h1 className="indexNumber">{this.state.uvIndex}</h1>
                  <h3>{this.props.user.city}</h3>
                  <h2>Aug. 14, 2018</h2>
                  <h1>Minneapolis, MN</h1>
                  <button onClick={this.getUVIndex}>Add&nbsp;/&nbsp;Edit Location(s)</button>
                  <EditLocationModal isOpen={this.props.isModalOpen} onClose={() => this.closeEditLocationModal()}></EditLocationModal>
                  <button >History Graph</button>
                  <button ><Link to="/info">What is UV?</Link></button><br/>
                  <button onClick={this.logout}>Log Out</button>
               </div>
            </div>
         );
      }

      return (
         <div>
            {/* <Nav /> */}
            {content}
         </div>
      );
   }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);




 