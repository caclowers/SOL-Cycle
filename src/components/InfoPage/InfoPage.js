import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
   user: state.user,
});

const divStyle = {
   textDecoration: 'underline'
 };

class InfoPage extends Component {
   componentDidMount() {
      this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
   }

   componentDidUpdate() {
      if (!this.props.user.isLoading && this.props.user.userName === null) {
         this.props.history.push('home');
      }
   }

   render() {
      let content = null;

      if (this.props.user.userName) {
         content = (
            <div className="infoDiv">
               <h1>What is UV?</h1>
               <span><button>Back to Home</button></span>
               <h3>
                  The UV Index scale used in the United States conforms with international guidelines for UVI reporting established by the World Health Organization (WHO).
                  <br />
                  <br />
                  <span style={divStyle}>How to read the UV index Scale.</span>
                  <br />
                  <br />
                  0 to 2: low<br/><br/>
                  A UV Index reading of 0 to 2 means low danger for the average person.
                  <br/>
                  ° Wear sunglasses on bright days.<br/>
                  ° If you burn easily, cover up and use broad spectrum SPF 30+ sunscreen.<br/>
                  ° Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
                  <br />
                  <br />
                  <br />
                  3 to 5: moderate<br/><br/>
                  A UV Index reading of 3 to 5 means moderate risk of harm from unprotected sun exposure.<br/>
                  Stay in shade near midday when the sun is strongest.<br/>
                  If outdoors, wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.<br/>
                  Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.<br/>
                  Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
                  <br />
                  <br />
                  <br />
                  6 to 7: High
                  <br/><br/>
                  A UV Index reading of 6 to 7 means high risk of harm from unprotected sun exposure.<br/>
                  Protection against skin and eye damage is needed.<br/>
                  <br/>
                  Reduce time in the sun between 10 a.m. and 4 p.m.<br/>
                  If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.<br/>
                  Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.<br/>
                  Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
                  <br />
                  <br />
                  <br />
                  8 to 10: Very High
                  <br /><br/>
                  A UV Index reading of 8 to 10 means very high risk of harm from unprotected sun exposure.<br/>
                  Take extra precautions because unprotected skin and eyes will be damaged and can burn quickly.<br/>
                  <br/>
                  Minimize sun exposure between 10 a.m. and 4 p.m.<br/>
                  If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.<br/>
                  Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.<br/>
                  Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.
                  <br />
                  <br />
                  <br />
                  11 or more: Extreme
                  <br /><br/>
                  A UV Index reading of 11 or more means extreme risk of harm from unprotected sun exposure.<br/>
                  Take all precautions because unprotected skin and eyes can burn in minutes.<br/>
                  <br/>
                  Try to avoid sun exposure between 10 a.m. and 4 p.m.<br/>
                  If outdoors, seek shade and wear protective clothing, a wide-brimmed hat, and UV-blocking sunglasses.<br/>
                  Generously apply broad spectrum SPF 30+ sunscreen every 2 hours, even on cloudy days, and after swimming or sweating.<br/>
                  Watch out for bright surfaces, like sand, water and snow, which reflect UV and increase exposure.<br/>
                  <br />
                  <br />
                  <br />
                  The Shadow Rule
                  <br /><br/>
                  An easy way to tell how much UV exposure you are getting is to look for your shadow:
                  <br/>
                  If your shadow is taller than you are (in the early morning and late afternoon), your UV exposure is likely to be lower.<br/>
                  If your shadow is shorter than you are (around midday), you are being exposed to higher levels of UV radiation. Seek shade and protect your skin and eyes.
                  <br/>
                  <br/>
                   Information Provided by: <a href="https://www.epa.gov/sunsafety/uv-index-scale-1">epa.gov</a>
          </h3>
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
export default connect(mapStateToProps)(InfoPage);
