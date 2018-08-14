import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
   user: state.user,
});

class UserPage extends Component {
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

   render() {
      let content = null;

      if (this.props.user.userName) {
         content = (
            <div className="bodyDiv">
               <div className="cardDiv">
                  <main id="welcome">Welcome, {this.props.user.userName}!</main>
                  <h1>UV Index</h1>
                  <h1 className="indexNumber">8</h1>
                  <h3>{this.props.user.city}</h3>
                  <button >Add&nbsp;/&nbsp;Edit Location(s)</button>
                  <button >History Graph</button>
                  <button ><Link to="/info">What is UV?</Link></button><br/>
                  <button onClick={this.logout}>Log Out</button>
               </div>
            </div>
         );
      }

      return (
         <div>
            <Nav />
            {content}
         </div>
      );
   }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

